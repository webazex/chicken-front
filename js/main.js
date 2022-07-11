$(document).ready(function (){
   console.log(jQuery.fn.jquery);

   //change bg header for scrolling
   var scrolled;
   let patchToLogo = $('.header-container__logo').attr('data-patch');
   window.onscroll = function() {
      scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if(scrolled > 100){
         $("header").css({"background-color": "white"});
         $('.site-size__header-container .link__text').css({'color': '#232323'});
         $('.contact-box__text-desc').css({'color': '#E50746'});
         $('.contact-box__text-desc').css({'text-decoration': 'none'});
         $('.header-container__logo').attr('src', patchToLogo+'lb.png');
      }
      if(scrolled < 100){
         $("header").css({"background-color": "transparent"});
         $('.site-size__header-container .link__text, .contact-box__text-desc').css({'color': 'white'});
         $('.contact-box__text-desc').css({'text-decoration': 'underline'});
         $('.header-container__logo').attr('src', patchToLogo+'lw.png');
      }
   }
   //slider on home
   $('.slider-container__slider').slick(
       {
          infinite: true,
          responsive: [
             {
                breakpoint: 1024,
                settings: {
                   slidesToShow: 3,
                   slidesToScroll: 3,
                   infinite: true,
                   dots: true
                }
             },
             {
                breakpoint: 600,
                settings: {
                   slidesToShow: 2,
                   slidesToScroll: 2
                }
             },
             {
                breakpoint: 480,
                settings: {
                   slidesToShow: 1,
                   slidesToScroll: 1
                }
             }
             // You can unslick at a given breakpoint now by adding:
             // settings: "unslick"
             // instead of a settings object
          ]
       }
   );

});