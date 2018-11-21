<script>
  /*
   * Open the drawer when the menu icon (hamburger) is clicked.
   */
  var menu = document.querySelector('#hamburger');
  var main = document.querySelector('main');
  var drawer = document.querySelector('nav');

  menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
  });
  main.addEventListener('click', function() {
    drawer.classList.remove('open');
  });

</script>

// Hamburger Menu for Mobile Responsiveness HTML

// <!-- <a id="hamburger" class="header-menu"> -->
  // <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> -->
    // <!-- <path d="M2 6h20v3H2zm0 5h20v3H2zm0 5h20v3H2z"/> -->
  // <!-- </svg> -->
// <!-- </a> -->

// CSS for hamburger menu
// nav {
  // z-index: 10;
  // background-color: #fff;
  // width: 300px;
  // position: absolute;
  /* This transform moves the Nav Menu off canvas. */
  // -webkit-transform: translate(-300px, 0);
  // transform: translate(-300px, 0);
  /* animate the drawer */
  // transition: transform 0.3s ease;
// }
// .header-menu {
  // display: inline-block;
  // position: absolute;
  // top: 0;
  // left: 5px;
  /* padding: 1em; */
// }

/*.header-menu svg {
  width: 32px;
  fill: #E0E0E0;
}*/
// nav .open {
  // -webkit-transform: translate(0, 0);
  // transform: translate(0, 0);
// }

// nav li {
  // display: inline-block;
  // color: #2d3c49;
// }

// nav a {
  // vertical-align: bottom;
  // text-decoration: none;
  // padding: 1em;
// }
