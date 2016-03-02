// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//


jQuery(document).ready(function($){
    var swiperSlider = new Swiper('.swiper-parent',{
      paginationClickable: false,
      slidesPerView: 1,
      grabCursor: true,
      autoplay: 5000,
      loop: true,
      onSwiperCreated: function(swiper){
        $('[data-caption-animate]').each(function(){
          var $toAnimateElement = $(this);
          var toAnimateDelay = $(this).attr('data-caption-delay');
          var toAnimateDelayTime = 0;
          if( toAnimateDelay ) { toAnimateDelayTime = Number( toAnimateDelay ) + 750; } else { toAnimateDelayTime = 750; }
          if( !$toAnimateElement.hasClass('animated') ) {
            $toAnimateElement.addClass('not-animated');
            var elementAnimation = $toAnimateElement.attr('data-caption-animate');
            setTimeout(function() {
              $toAnimateElement.removeClass('not-animated').addClass( elementAnimation + ' animated');
            }, toAnimateDelayTime);
          }
        });
      },
      onSlideChangeStart: function(swiper){
        $('[data-caption-animate]').each(function(){
          var $toAnimateElement = $(this);
          var elementAnimation = $toAnimateElement.attr('data-caption-animate');
          $toAnimateElement.removeClass('animated').removeClass(elementAnimation).addClass('not-animated');
        });
      },
      onSlideChangeEnd: function(swiper){
        $('#slider .swiper-slide.swiper-slide-active [data-caption-animate]').each(function(){
          var $toAnimateElement = $(this);
          var toAnimateDelay = $(this).attr('data-caption-delay');
          var toAnimateDelayTime = 0;
          if( toAnimateDelay ) { toAnimateDelayTime = Number( toAnimateDelay ) + 300; } else { toAnimateDelayTime = 300; }
          if( !$toAnimateElement.hasClass('animated') ) {
            $toAnimateElement.addClass('not-animated');
            var elementAnimation = $toAnimateElement.attr('data-caption-animate');
            setTimeout(function() {
              $toAnimateElement.removeClass('not-animated').addClass( elementAnimation + ' animated');
            }, toAnimateDelayTime);
          }
        });
      }
    });

    var ocTeam = $("#oc-team");

    ocTeam.owlCarousel({
      responsive: {
        320:{ items:1 },
        480:{ items:2 },
        768:{ items:3 },
        992:{ items:3 },
        1200:{ items:4 }
      },
      margin: 30,
      nav: true,
      navText: ['<i class="icon-ok-sign"></i>','<i class="icon-ok-sign"></i>'],
      dots: true
    });

});



  
