var express = require("express");
var router = express.Router({strict: true});
var dbUsers = require("../model/db_users");

// For the root URL, we unconditionally redirect the user to their index.
// If it doesn't exist, let the other middlewares handle it.
router.get("/", (req, res) => {
  res.redirect("/secret/" + (req.session.userid || "not_logged_in") + "/");
});

// Middleware for always checking if the user is authorized
router.use((req, res, next) => {
  // Take the id of the URL. From "/secret/1/...", take 1.
  var id = Number(req.url.split("/").filter((str) => { return str !== ""; })[0]);

  if(req.session.username === "walwal20"){
    return next();
  } else if(id && req.specialUser && Number(req.session.userid) === id){
    return next();
  } else {
    res.render("message_page", {
      session: req.session,
      message: "Sorry, there is nothing special for you yet.",
    });
  }
});

// Middleware for providing req.session with data specific to each user
router.use((req, res, next) => {
  if(req.session.userData){
    return next();
  }
  req.session.userData = {};

  if(req.session.username === "walwal20"){
    dbUsers.allUsers()
    .then((users) => {
      req.session.userData.allUsers = users.sort((a, b) => { return a.id > b.id; });
      return next();
    })
    .catch((err) => console.log(err.stack));
  } else {
    return next();
  }
});

module.exports = router;