$(document).ready(function (){
   console.log(jQuery.fn.jquery);

   //change bg header for scrolling
   var scrolled;
   window.onscroll = function() {
      scrolled = window.pageYOffset || document.documentElement.scrollTop;
      if(scrolled > 100){
         $("header").css({"background-color": "white"})
      }
      if(scrolled < 100){
         $("header").css({"background-color": "transparent"})
      }

   }
});