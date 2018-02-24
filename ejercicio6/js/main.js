$(function() {
 var elHeader =$('#pageHeader'),
     elSlider = $('#slider'),
     windowHeight = $(window).height();

     elHeader.css({
        height: windowHeight,
     });

     elSlider.flexslider({
         selector: ".slider__list > li",
         prevText:'Anterior',
         nextText:'Siguiente',
         customDirectionNav: $('.slider__direction-nav a'),
     });

});