var express = require("express");
var router = new express.Router();

router.get("/",                 (req, res) => req.renderer.render(res, "articles/index"));
router.get("/1-hpc-sspi",       (req, res) => req.renderer.render(res, "articles/1-hpc-sspi"));

module.exports = router;