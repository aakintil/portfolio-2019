$(document).ready(function (){

var delayInMilliseconds = 3000; //1 second

setTimeout(function() {
  //your code to be executed after 1 second
  document.getElementsByClassName('zerodark-cloak-cover')[0].removeAttribute('v-cloak');
  runAnimations();
}, delayInMilliseconds);


});

$(window).scroll(function() {
  if ($(".zerodark-section-services-container").length != 0){
    var hT = ($('.zerodark-section-services-container').offset().top),
      hH = $('.zerodark-section-services-container').outerHeight() + 250,
      wH = $(window).height(),
      wS = $(this).scrollTop();
  if (wS > (hT+hH-wH)){
    removeVeil();
    //valuesScrollAnimation.play();
  }

  var chT = ($('.section-process').offset().top),
      chH = ($('.section-process').outerHeight() - $('.section-process-image').outerHeight()) - 110,
      cwH = $(window).height(),
      cwS = $(this).scrollTop();
  if (cwS > (chT+chH-cwH)){
    removeProcessVeil()
  }

  var chT = ($('.zerodark-section-case-studies-parent').offset().top),
      chH = $('.zerodark-section-case-studies-parent').outerHeight() - $('.section-case-studies-container').outerHeight(),
      cwH = $(window).height(),
      cwS = $(this).scrollTop();
  if (cwS > (chT+chH-cwH)){
    removeWorksVeil()
  }

  var chT = ($('.section-select-clients-container').offset().top),
    chH = $('.section-select-clients-container').outerHeight() - $('.select-clients-row').outerHeight(),
    cwH = $(window).height(),
    cwS = $(this).scrollTop();
  if (cwS > (chT+chH-cwH)){
    removeClientsVeil();
  }
  }
});


var showServices = false;
var showProcess = false;
var showWorks = false;
var showClients = false;

function removeProcessVeil(){
  if (!showProcess){
    anime.timeline().add({
      targets: '.section-process',
      opacity: [0, 1],
      duration: 800,
      easing: 'easeInSine'
    }).add({
      targets: '.section-process-image',
      opacity: [0, 1],
      scale: [1.2, 1],
      delay: anime.stagger(100, {easing: 'easeOutQuad'})
    });
    showProcess = true;
  }
}

function removeClientsVeil(){
  if (!showClients){
    anime.timeline().add({
      targets: '.section-select-clients-container',
      opacity: [0, 1],
      easing: 'easeInSine'
    })
    showClients = true;
  }
}

function removeWorksVeil(){
  if (!showWorks){
    anime.timeline().add({
      targets: '.zerodark-section-case-studies-parent',
      opacity: [0, 1],
      duration: 800,
      easing: 'easeInSine'
    }).add({
      targets: '.case-study',
      opacity: [0, 1],
      elasticity: 500,
      scale: [
        {value: 1.5, easing: 'easeOutSine', duration: 200},
        {value: 1, easing: 'easeOutSine', duration: 200}
      ],
      delay: anime.stagger(100)
    }, '+=100');
    showWorks = true;
  }
}

function removeVeil(){
  //valuesScrollAnimation.play();
  if (!showServices){
    anime.timeline().add({
      targets: '.zerodark-services-detail-container',
      opacity: [0, 1],
      easing: 'easeInSine'
    }).add({
      targets: '.services-detail-container',
      opacity: [0, 1],
      scale: [1.2, 1],
      delay: anime.stagger(100, {easing: 'easeOutQuad'})
    });
    showServices = true;
  }

}

function runAnimations(){
  anime.timeline().add({
    targets: '.section-hero-home',
    height: '80vh',
    elasticity: 600,
    opacity: [0, 1],
  }).add({
    targets: '.zerodark-section-services-container',
    opacity: [0, 1],
    easing: 'easeInSine'
  }, '-=400');

  anime.timeline().add({
    targets: '.section-hero-portfolio',
    height: '70vh',
    elasticity: 600,
    opacity: [0, 1],
  }).add({
    targets: '.zerodark-section-services-container',
    opacity: [0, 1],
    easing: 'easeInSine'
  }, '-=400');
}

var valuesScrollAnimation = anime({
  targets: '.zerodark-services-detail-container',
  opacity: [0, 1],
  autoplay: false,
  easing: 'easeInSine'
});

function showValuesOnScroll(){

}