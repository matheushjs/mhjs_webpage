{% extends "partials/main.njs" %}


{% block morehead %}

{% if lang === "ja" %}
  <link rel="canonical" href="https://mjsaldanha.com/ja"/>
{% else %}
  <link rel="canonical" href="https://mjsaldanha.com"/>
{% endif %}

  <link rel="alternate" hreflang="en" href="https://mjsaldanha.com" />
  <link rel="alternate" hreflang="ja" href="https://mjsaldanha.com/ja" />
  <link rel="alternate" hreflang="x-default" href="https://mjsaldanha.com" />

  <style>
    .carousel-indicators li {
      border: 1px solid black;
      height: 12px;
      width: 12px;
      border-radius: 100%;
      background-color: #9995;
    }

    .carousel-indicators li.active {
      background-color: #999F;
    }

    @media (max-width: 576px) {
      .carousel-indicators {
        margin-bottom: 0px;
      }

      .carousel-indicators li {
        height: 16px;
        width: 16px;
      }
    }

    #projectsCarousel .carousel-inner {
      /* background: linear-gradient(90deg, #e9e9e9 0%, #e9e9e9 5%, white 50%, #e9e9e9 95%, #e9e9e9 100%); */
      background: #f8f8f8;
    }
    #projectsCarousel h2 {
      text-decoration: underline;
      padding: 20px 0 40px;
    }
    #projectsCarousel h2 a {
      position: absolute;
      right: 3%;
      font-size: 1rem;
    }
    #projectsCarousel img {
      padding-bottom: 20px;
    }

    .elf-table {
      background: #e5e5e5;
    }
    .elf-table, .elf-table th, .elf-table td {
      border-color: #999;
    }

    .elf-side-title {
      margin: 40px auto;
    }

    .elf-top-title {
      margin: -8vh auto 40px; /* margin-top due to .major-block margins */
    }

    .elf-moving-logo {
      position: absolute;
      left: calc(50% - 48px);
      opacity: 0;

      animation-name: elf-logo-motion;
      animation-iteration-count: infinite;
      animation-direction: normal;
      animation-duration: 15s;
      animation-fill-mode: forwards;
      animation-delay: 1s;
    }
    @keyframes elf-logo-motion {
        0% { opacity:   0; left:   1%; }
        10% { opacity:   1; left:   1%; }
        20% { opacity:   1; left:   calc(50% - 48px); }
        60% { opacity:   1; left:   calc(50% - 48px); }
        70% { opacity:   1; left:   1%; }
        80% { opacity:   1; left:   1%; }
        90% { opacity:   0; left:   1%; }
      100% { opacity:   0; left:   1%; }
    }
  </style>

  <script src="/scripts/elfResearch.js"></script>
{% endblock %}


{% block header %}
  <div class="text-center container" style="margin: 10vh auto;">
    {{ trans.home.title }}
  </div>
{% endblock %}


{% block body %}
  <div id="welcome" class="container-fluid major-block" style="padding-top: 8vh;">
    <div class="row">
      <div class="col-md-4 text-center">
        <img src="/images/index/my_photo.jpg" class="img-fluid img-thumbnail" alt="Photo of Myself">
      </div>
      
      <div class="col-md-6 text-center">
        <div style="margin: 20px 0px; height: 96px;">
          <img class="elf-moving-logo elf-class-control" src="/images/elf_logo_512.png" width="96" data-control="elf-moving-logo">
        </div>
        <div class="justify-content-sm-center" style="font-size: 1.1rem;">
          {{ trans.home.intro }}
        </div>
        <div class="elf-textflow"></div>
      </div>
      
      <div class="col-md-2">

      </div>
    </div>
  </div>
  
  <div id="myresearch" class="container-fluid text-center major-block">
    <div class="mb-5">
      <img src="/octicons/svg/beaker.svg" class="slideanim align-baseline" style="height: 2.2rem;" alt="lab beaker">
      <h1 class="elf-top-title slideanim d-inline mx-5">{{ trans.home.sidetitle3 }}</h1>
      <img src="/octicons/svg/beaker.svg" class="slideanim align-baseline" style="height: 2.2rem;" alt="lab beaker">
    </div>
    <div class="row">
      <div class="col-md-5 text-justify" style="font-size: 1.1rem;">
        <div class="px-5">
          {{ trans.home.research.init }}
        </div>
      </div>
      <div class="col-md-7">
        <div  id="research-kanban" class="container-fluid text-center">
          <h3 class="mb-3">
            {{ "最近" if lang === "ja" else "latest" }}
          </h3>

          <div class="row mb-3">
            <div class="col-md-6">
              <a href="#" style="white-space: normal;" class="btn btn-secondary border rounded p-3 my-1">
              </a>
            </div>
            <div class="col-md-6">
              <a href="#" style="white-space: normal;" class="btn btn-secondary border rounded p-3 my-1">
              </a>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-12 text-center">
              <a href="#" style="white-space: normal;" class="w-50 btn btn-secondary border rounded p-3 my-1">
              </a>
            </div>
          </div>

          <div class="container-fluid">
              <a href="/sci-projects/" class="btn btn-dark m-2 p-3 ">{{ trans.home.research.allresearch }}</a>
              <a href="/articles/" class="btn btn-dark m-2 p-3">{{ trans.home.research.allarticles }}</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="acadinfo" class="container-fluid text-center major-block">
    <div class="row">
      <div class="col-md-3 order-md-2">
        <h1 class="slideanim elf-side-title align-self-center">
            {{ trans.home.sidetitle2 }} <br>
            <img src="/octicons/svg/mortar-board.svg" alt="graduation hat" style="height: 2.5rem;">
        </h1>
      </div>

      <div class="col-md-9 order-md-1">
        <div class="table-responsive">
          <table class="table table-bordered container text-center elf-table">
            <tbody>
              <tr>
                <th scope="row" style="vertical-align: middle;">{{ trans.home.acadinfo.instit }}</th>
                <td>
                  <!-- <div><a class="elf-dark-a" href="https://www.icmc.usp.br" target="_blank">ICMC - USP</a></div> -->
                  <div>Graduate School of Science and Technology - University of Tsukuba</div>
                </td>
              </tr>
              <tr>
                <th scope="row">{{ trans.raw.major }}</th>
                <td>{{ trans.raw.compsci }}</td>
              </tr>
              <tr>
                <th scope="row">{{ trans.home.acadinfo.occup }}</th>
                <td>{{ trans.raw.understud }}</td>
              </tr>
              <tr>
                <th scope="row" style="vertical-align: middle;">{{ trans.raw.contact }}</th>
                <td><span class="elf-email">Enable javascript to see.</span></td>
              </tr>
              <tr>
                <th scope="row" style="vertical-align: middle;">{{ trans.raw.interests }}</th>
                <td>
                  <div>Statistical Learning Theory</div>
                  <div>Time Series Forecasting</div>
                  <div>Applied Statistics & Mathematics</div>
                  <div>Machine Learning & Deep Learning</div>
                  <div>High-Performance Computing</div>
                  <div>Web Development</div>
                </td>
              </tr>
              <tr>
                <th scope="row" style="vertical-align: middle;">Lattes {{ trans.raw.curriculum }}</th>
                <td><a href="http://lattes.cnpq.br/2301154612725391" target="_blank">lattes.cnpq.br/2301154612725391</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>

  <div id="csinterests" class="container-fluid text-center major-block">
    <div class="row">  
      <div class="col-md-3">
        <h1 class="slideanim elf-side-title align-self-center">
          {{ trans.home.sidetitle4 }} <br>
          <img src="/octicons/svg/thumbsup.svg" alt="graph" style="height: 2.5rem;">
        </h1>
      </div>

      <div class="col-md-9">
        <div id="likingsCarousel" class="carousel slide" data-ride="carousel" data-pause="false">
          <ol class="carousel-indicators">
            <li data-target="#likingsCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#likingsCarousel" data-slide-to="1"></li>
            <li data-target="#likingsCarousel" data-slide-to="2"></li>
            <li data-target="#likingsCarousel" data-slide-to="3"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="w-100 bg-white rounded border" style="max-width: 1000px;" src="/images/index/slideimage/gpucpu.png">
            </div>
            <div class="carousel-item">
              <img class="w-100 bg-white rounded border" style="max-width: 1000px;" src="/images/index/slideimage/parallel.png">
            </div>
            <div class="carousel-item">
              <img class="w-100 bg-white rounded border" style="max-width: 1000px;" src="/images/index/slideimage/linux.png">
            </div>
            <div class="carousel-item">
              <img class="w-100 bg-white rounded border" style="max-width: 1000px;" src="/images/index/slideimage/machine-learning.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div id="elfprojs" class="container-fluid text-center major-block">
    <div class="row">
      <div class="col-md-4 order-md-2">
        <h1 class="slideanim elf-side-title align-self-center">
          {{ trans.home.sidetitle5 }} <br>
          <img src="/octicons/svg/circuit-board.svg" alt="circuit board" style="height: 2.5rem;">
        </h1>
      </div>
      <div class="col-md-8 order-md-1">
        {% include "partials/index-content/elfprojs.njs" %}
      </div>
    </div>
  </div>

  <div id="whyelf" class="container-fluid text-center major-block elf-modal-block">
    <div class="row">
      <div class="col-md-4">
        <h1 class="slideanim elf-side-title align-self-center">
          {{ trans.home.sidetitle6 }} <br>
          <img src="/octicons/svg/question.svg" alt="question mark" style="height: 2.5rem;">
        </h1>
      </div>
      <div class="col-md-8 elf-modal-content">
        {% include "partials/index-content/whyelf.njs" %}
        <button style="position: absolute; bottom: 20px; width: 60%; left: 20%;" 
                type="button"
                class="btn btn-lg btn-light border border-dark elf-modal-button"
                data-toggle="modal" data-target="#whyelf-modal">
          Read More!
        </button>
      </div>
    </div>
  </div>
  <!-- Modal for Why Elf? -->
  <div class="modal fade" id="whyelf-modal" tabindex="-1" role="dialog" aria-labelledby="whyelf-modal-title" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="whyelf-modal-title">{{ trans.home.sidetitle6 }}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {% include "partials/index-content/whyelf.njs" %}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <div id="progcradle" class="container-fluid text-center major-block elf-modal-block">
    <div class="row">
      <div class="col-md-4 order-md-2">
        <h1 class="slideanim elf-side-title align-self-center">
          {{ trans.home.sidetitle7 }} <br>
          <img src="/elficons/cradle.svg" alt="cradle" style="height: 2.5rem;">
        </h1>
      </div>
      
      <div class="col-md-8 order-md-1 elf-modal-content">
        {% include "partials/index-content/progcradle.njs" %}
        <button style="position: absolute; bottom: 20px; width: 60%; left: 20%;" 
                type="button"
                class="btn btn-lg btn-light border border-dark elf-modal-button"
                data-toggle="modal" data-target="#progcradle-modal">
          Read More!
        </button>
      </div>
    </div>
  </div>
  <!-- Modal for Programming Cradle -->
  <div class="modal fade" id="progcradle-modal" tabindex="-1" role="dialog" aria-labelledby="progcradle-modal-title" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="progcradle-modal-title">{{ trans.home.sidetitle7 }}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {% include "partials/index-content/progcradle.njs" %}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <div id="miscints" class="container-fluid text-center major-block elf-modal-block">
    <div class="row">
      <div class="col-md-4">
        <h1 class="slideanim elf-side-title align-self-center">
          {{ trans.home.sidetitle8 }} <br>
          <img src="/octicons/svg/thumbsup.svg" alt="graph" style="height: 2.5rem;">
        </h1>
      </div>

      <div class="col-md-8 elf-modal-content">
        {% include "partials/index-content/miscints.njs" %}
        <button style="position: absolute; bottom: 20px; width: 60%; left: 20%;" 
                type="button"
                class="btn btn-lg btn-light border border-dark elf-modal-button"
                data-toggle="modal" data-target="#miscints-modal">
          Read More!
        </button>
      </div>
    </div>
  </div>
  <!-- Modal for Miscellaneous Interests -->
  <div class="modal fade" id="miscints-modal" tabindex="-1" role="dialog" aria-labelledby="miscints-modal-title" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title" id="miscints-modal-title">{{ trans.home.sidetitle8 }}</h4>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          {% include "partials/index-content/miscints.njs" %}
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <div class="container" style="position: sticky; bottom: 20px; margin-top: 20px; z-index: 10;">
    <nav class="navbar navbar-expand-lg navbar-dark elf-starry-sky-top elf-navbar-bottom">
      <div class="navbar-brand">Index</div>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#floatingIndex" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        Index <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="floatingIndex">
        <div class="navbar-nav">
          <a class="nav-item nav-link text-center active" href="#welcome">{{ trans.home.sidetitle1 }}</a>
          <a class="nav-item nav-link text-center" href="#myresearch">{{ trans.home.sidetitle3 }}</a>
          <a class="nav-item nav-link text-center" href="#acadinfo">{{ trans.home.sidetitle2 }}</a>
          <a class="nav-item nav-link text-center" href="#csinterests">{{ trans.home.sidetitle4_short }}</a>
          <a class="nav-item nav-link text-center" href="#elfprojs">{{ trans.home.sidetitle5 }}</a>
          <a class="nav-item nav-link text-center" href="#whyelf">{{ trans.home.sidetitle6 }}</a>
          <a class="nav-item nav-link text-center" href="#progcradle">{{ trans.home.sidetitle7 }}</a>
          <a class="nav-item nav-link text-center" href="#miscints">{{ trans.home.sidetitle8_short }}</a>
        </div>
      </div>
    </nav>
  </div>

  <script>
    // Add smoothscrolling for scrollspy
    $(document).ready(function(){
      $("#floatingIndex a").on("click", function(event){
        // this.hash must have a value
        if(this.hash !== "") {
          event.preventDefault();

          var hash = this.hash;

          $("html, body").animate({
            scrollTop: $(hash).offset().top
          }, 500, function(){
            // Add hash link to URL
            window.location.hash = hash;
          });
        }
      });
    });
  </script>

  <script>Elf.fillResearchKanban($("#research-kanban a[href='#']"));</script>
{% endblock %}
