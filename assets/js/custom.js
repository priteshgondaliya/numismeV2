$(document).ready(function($) {
  $('.bar').click(function() {
    $('.header_area .col-xl-9.show_menu').toggleClass('show');
  });


  $(window).scroll(function(){
    if ($(window).scrollTop() >= 50) {
      $('.header_area').addClass('fixed_header');
    }
    else {
      $('.header_area').removeClass('fixed_header');
    }
  });


  

  $('.scroll_js').click(function(e){
    e.preventDefault();
    var target = $($(this).attr('href'));
    if(target.length){
      var scrollTo = target.offset().top;
      $('body, html').animate({scrollTop: scrollTo+'px'}, 10);
    }
  });

});