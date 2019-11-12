$(document).ready(function (){
    anime.timeline().add({
        targets: '.section-hero',
        height: '90vh',
        elasticity: 400,
        delay(el, i) {
          return i * 250;
        }
      })
});