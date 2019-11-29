$(document).ready(function (){

var delayInMilliseconds = 3000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
  //runAnimations();
  document.getElementsByClassName('zerodark-cloak-cover')[0].removeAttribute('v-cloak');
  runAnimations();
}, delayInMilliseconds);


});

$(window).scroll(function() {
  var hT = ($('.zerodark-section-services-container').offset().top),
      hH = $('.zerodark-section-services-container').outerHeight() + 150,
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)){
    console.log("balls");
    valuesScrollAnimation.play();
  }
});




function removeVeil(){

}

function runAnimations(){
  anime.timeline().add({
    targets: '.section-hero',
    height: '80vh',
    elasticity: 600,
    opacity: [0, 1],
  }).add({
    targets: '.zerodark-section-services-container',
    opacity: [0, 1],
    easing: 'easeInSine'
  })
}

var valuesScrollAnimation = anime({
  targets: '.zerodark-services-detail-container',
  opacity: [0, 1],
  autoplay: false,
  easing: 'easeInSine'
});

function showValuesOnScroll(){

}