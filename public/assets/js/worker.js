$(document).ready(function (){

var delayInMilliseconds = 3000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
  //runAnimations();
  document.getElementsByClassName('zerodark-cloak-cover')[0].removeAttribute('v-cloak');
  runAnimations()
}, delayInMilliseconds);

});


function removeVeil(){

}

function runAnimations(){
  anime.timeline().add({
    targets: '.section-hero',
    height: '80vh',
    elasticity: 600,
    opacity: [0, 1],
    duration: 2500,
  }).add({
    targets: '.zerodark-section-services-container',
    opacity: [0, 1],
    duration: 2500,
    easing: 'spring(1, 80, 10, 0)',
  })
}