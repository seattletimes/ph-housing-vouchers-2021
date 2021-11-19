// var paywall = require("./lib/paywall");
// setTimeout(() => paywall(12345678), 5000);

require("component-responsive-frame/child");
var Flickity = require('flickity');

var elem = document.querySelector('.main-carousel');

// document.querySelectorAll(".main-carousel").forEach(el => {
//
//   new Flickity( el, {
//     // options
//     // cellAlign: 'left',
//     contain: false,
//     wrapAround: true,
//     lazyLoad: true,
//     autoPlay: false
//   });
//
// });


// document.querySelectorAll(".txt-block").forEach(el => el.addEventListener('click', () => {
//
// }));



var moveAnimation = function(slideNumber) {

  document.querySelectorAll(".text").forEach(el => el.classList.remove('highlight'));
  document.querySelectorAll(".text-color").forEach(el => el.classList.remove('highlight'));
  document.querySelectorAll(".fa-caret-down").forEach(el => el.classList.remove('highlight'));
  document.querySelectorAll(".fa-caret-up").forEach(el => el.classList.remove('highlight'));
  document.querySelectorAll(".hand").forEach(el => el.classList.remove('highlight'));

      switch (slideNumber) {
      case 0:
        console.log('number 0');
        document.querySelector(".hud").classList.add('highlight');
        document.querySelector("#hud .fa-caret-down").classList.add('highlight');
        // document.querySelectorAll(".ha").forEach(el => el.classList.add('highlight'));
        break;
      case 1:
        console.log('number 1');
        document.querySelectorAll(".ha").forEach(el => el.classList.add('highlight'));
        document.querySelector("#ha .fa-caret-down").classList.add('highlight');
        // document.querySelector(".kcrha").classList.add('highlight');
        break;
      case 2:
        console.log('number 2');
        document.querySelector(".kcrha").classList.add('highlight');
        document.querySelector("#kcrha .fa-caret-down").classList.add('highlight');
        break;
      case 3:
        console.log('number 3');
        document.querySelectorAll(".houses .hand").forEach(el => el.classList.add('highlight'));
        document.querySelector("#nonprofits .fa-caret-down").classList.add('highlight');
        break;
      case 4:
        console.log('number 4');
        document.querySelectorAll(".people .fa-users").forEach(el => el.classList.add('highlight'));
        document.querySelector("#nonprofits .fa-caret-up").classList.add('highlight');
        break;
      case 5:
        console.log('number 5');
        document.querySelectorAll(".houses .hand").forEach(el => el.classList.add('highlight'));
        document.querySelector("#kcrha .fa-caret-up").classList.add('highlight');
        break;
      case 6:
        console.log('number 6');
        document.querySelector(".kcrha").classList.add('highlight');
        document.querySelector("#ha .fa-caret-up").classList.add('highlight');
        break;
      case 7:
        console.log('number 7');
        document.querySelectorAll(".ha").forEach(el => el.classList.add('highlight'));
        document.querySelectorAll(".people .fa-users").forEach(el => el.classList.add('highlight'));
        break;
      case 8:
        console.log('number 8');
        document.querySelectorAll(".houses .hand").forEach(el => el.classList.add('highlight'));
        break;
      case 9:
        console.log('number 9');
        document.querySelectorAll(".people .fa-users").forEach(el => el.classList.add('highlight'));
        break;

      case 10:
        console.log('number 10');
        // document.querySelectorAll(".ha").forEach(el => el.classList.add('highlight'));
        document.querySelector(".people .fa-users.last").classList.add('highlight');
        break;
      default:
        console.log(slideNumber);
    }

};


// vanilla JS
var flkty = new Flickity( '.main-carousel', {
  contain: false,
  wrapAround: false,
  lazyLoad: true,
  autoPlay: false,
  on: {
    ready: function() {
      console.log('Flickity is ready');
      moveAnimation(0);
    },
    change: function( index ) {
      console.log( 'Slide changed to' + index );
      moveAnimation(index);
    }
  }
});



// document.querySelectorAll(".txt-block").forEach(el => el.addEventListener('click', () => {
//   document.querySelectorAll('.arrows .fa-caret-down').forEach(el => el.classList.remove('show') );
//   document.querySelectorAll('.arrows .fa-caret-up').forEach(el => el.classList.remove('show') );
//   let arrow_group = el.dataset.arrow;
//   let direction = el.dataset.dir;
//
//   var find_arrows = document.querySelector(`#${arrow_group}`);
//
//   find_arrows.querySelectorAll(`.fa-caret-${direction}`).forEach(el => el.classList.add('show') );
//
// }))
