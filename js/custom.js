

/* NOTES


*/

/* jQuery Pre loader
--> window.load fires later (or at the same time in the worst/failing cases) when images and such are loaded, so if you're using image dimensions for example, you often want to use this instead
-----------------------------------------------*/
$(window).load(function(){

     /* wow -------------------------------
    Provide effects such fadeIn fadeOut .. etc*/
    new WOW({ mobile: false }).init();

    // When pages load, preloader gif should disappear, and web content appear
    $('.preloader').fadeOut(1500); // set duration in brackets
});

/*
--> document.ready is a jQuery event, it runs when the DOM is ready, e.g. all elements are there to be found/used, but not necessarily all content.
------------------------------------------------*/
$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /* home slider section
  ----------------------------------------------- 
  $(function(){
    jQuery(document).ready(function() {
    $('#home').backstretch([
       "images/home.png",
       "images/home.png",
        ],  {duration: 2000, fade: 1250});
    });
  }) */

  /* Owl Carousel
    -----------------------------------------------
  $(document).ready(function() {
    $("#owl-testimonial").owlCarousel({
      autoPlay: 5000,
      items : 2,
      itemsDesktop : [1199,1],
      itemsDesktopSmall : [979,2],
    });
  });
  */


  /* Parallax section
    -----------------------------------------------*/
  function initParallax() {
    
    $('.service').parallax("100%", 0.3);
    $('#about').parallax("100%", 0.2);
    $('#team').parallax("100%", 0.3);
    $('#portfolio').parallax("100%", 0.1);
    $('#blog').parallax("100%", 0.2);
    $('#faq').parallax("100%", 0.1);
    $('#testimonial').parallax("100%", 0.3);
  }
  initParallax();


  /* Nivo lightbox
    -----------------------------------------------*/
  $('#portfolio .col-md-4 a').nivoLightbox({
        effect: 'fadeScale',
    });


  });
