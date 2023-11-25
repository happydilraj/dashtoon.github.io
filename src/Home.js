import React from 'react'

const Home = () => {
  return (
    <div>
        <div id="mainload" style={{"background-image": "url('../src/images/mainloading.gif'");
    "height": 100;
    width: 100%;
    position: fixed;
    z-index: 5;
    margin: 0;
    padding: 0;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;}}>

  </div>

  <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-1 fs-3">
    <div class="container-fluid">
      <a class="navbar-brand fs-3" href="#"><img src="logo.png" style="width:75px;"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 px-3 ml-auto">
          <li class="nav-item px-3">
            <a class="nav-link active" aria-current="page" href="./index.html">Home</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="./tournaments.html">Tournaments</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="./aboutus.html">About Us</a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="./contact.html">Contact Us</a>
          </li>
        </ul>
        <button type="button" class="btn loginbtn btn-outline-success py-2" onclick="authy()">
          Login Now
        </button>
      </div>
    </div>
  </nav>
  <div class="card bg-dark text-white">
    <img src="home.jpg" class="card-img" alt="...">
    <div class="card-img-overlay d-flex flex-column align-items-center justify-content-center">
      <h1 class="card-title fw-bold" style="font-size: 4.2vw; text-align: center;">INDIA’S MOST POPULAR E-SPORTS
        COMMUNITY</h1>
      <h4 class="card-text" style="font-size: 1.5vw;">Participate in tournaments and win Exciting Prizes!!</h4>

    </div>
  </div>
  <h1 class="played">What We Play</h1>
  <div class="subsection my-5">
    <div class="card mx-3 my-2" id="card" style="width: 22rem; cursor: pointer"
      onclick="window.open('./tournaments.html', '_self')">
      <img src="pubg.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
          BGMI, aka Battlegrounds Mobile India is one of the India's favourite
          game is here in our website to compete. Battlegrounds Mobile India
          is an online multiplayer battle royale game developed and published
          by Krafton. The game is exclusively for the Indian users.
        </p>
      </div>
    </div>
    <div class="card mx-3 my-2" id="card" style="width: 22rem; cursor: pointer"
      onclick="window.open('./tournaments.html', '_self')">
      <img src="codm.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
          Official CALL OF DUTY® designed exclusively for mobile phones. Play
          iconic multiplayer maps and modes anytime, anywhere. 100 player
          Battle Royale battleground? Fast 5v5 team deathmatch? Sniper vs
          sniper battle? Activision’s free-to-play CALL OF DUTY®: MOBILE has
          it all.
        </p>
      </div>
    </div>
    <div class="card mx-3 my-2" id="card" style="width: 22rem; cursor: pointer"
      onclick="window.open('./tournaments.html', '_self')">
      <img src="freefire.jpg" class="card-img-top" alt="..." />
      <div class="card-body">
        <p class="card-text">
          Free Fire is the ultimate survival shooter game available on mobile.
          Drive vehicles to explore the vast map, hide in the wild, or become
          invisible by proning under grass or rifts. Ambush, snipe, survive,
          there is only one goal: to survive and answer the call of duty.
        </p>
      </div>
    </div>
  </div>
  <h1 style="text-align: center; color: white;" class="my-3 played">Our Stats</h1>
  <section class="counters  p-5" style="color: white;" id="counters">
    <div class="container-fluid">
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-lg-3 col-xs-12 col-xl-3 col-md-3">
            <div class="item wow fadeInUpBig animated animated" data-number="12" style="visibility: visible;">
              <h1 id="number4" class="number">500+</h1>
              <hr>
              <h4>Gamers</h4>
            </div>
          </div>
          <div class="col-sm-12 col-lg-3 col-xs-12 col-xl-3 col-md-3">
            <div class="item wow fadeInUpBig animated animated" data-number="12" style="visibility: visible;">
              <h1 id="number1" class="number">2K+</h1>
              <hr>
              <h4>Matches Played</h4>
            </div>
          </div>
          <div class="col-sm-12 col-lg-3 col-xs-12 col-xl-3 col-md-3">
            <div class="item wow fadeInUpBig animated animated" data-number="12" style="visibility: visible;">
              <h1 id="number3" class="number">1K+</h1>
              <hr>
              <h4>Leagues Joined</h4>
            </div>
          </div>
          <div class="col-sm-12 col-lg-3 col-xs-12 col-xl-3 col-md-3">
            <div class="item wow fadeInUpBig animated animated" data-number="12" style="visibility: visible;">
              <h1 id="number2" class="number">2K+</h1>
              <hr>
              <h4>Winning Distributed</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>


  
  <div class="row py-5 my-5 container-fluid sectionlogin">
    <div class="col-md-8">
      <img src="./playearn.jpg" alt="play" class=" w-100">
    </div>
    <div class=" desc col-md-4">
      <h1 class=" feature-heading my-3" style="color: white;">PLAY AND EARN</h1>
      <p class=" feature-desc" style="color: white;">Play competitive tournaments and win amazing cash prizes instantly! Join any of the
        multiple tournaments happening every hour, every day. Get exciting prizes for per kills or winning the tournament
        so that to ensure you higher chances of your wins.</p>
      <div>

        <button class="loginbtn" onclick="authy()">Login Now</button>

      </div>
    </div>
  </div>


  </div>


  <footer class="footer mt-auto py-3 bg-dark" id="foot">
    <div class="container-fluid">
      <span>All Rights Reserved &copy; 2021-22</span>
      <div class="me"><i class="fas fa-code"></i> with <i class="fas fa-heart"></i> by <a
          href="https://github.com/manu-shukla" style="text-decoration: none; color: white;">Manu Shukla</a>
      </div>
    </div>
  </footer>
  <!-- The core Firebase JS SDK is always required and must be listed first -->
  <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-app.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-auth.js"></script>
  <script src="https://www.gstatic.com/firebasejs/8.7.1/firebase-database.js"></script>

  <!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->

  <script>
    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyDirPko9bEyDdRNvFL3KviYBX35akyPaCs",
      authDomain: "gamingportal-ccd0c.firebaseapp.com",
      projectId: "gamingportal-ccd0c",
      storageBucket: "gamingportal-ccd0c.appspot.com",
      messagingSenderId: "198145608033",
      appId: "1:198145608033:web:74dbfe4b8aee816b609d20",
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  </script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
  <script src="main.js"></script>
  <script src="auth.js"></script>
    </div>
  )
}

export default Home