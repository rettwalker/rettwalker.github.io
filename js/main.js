(function($) {
    $(document).ready(function(){
      $(window).scroll(function(){
        if ($(this).scrollTop() > ($('#about').position().top - 5)) {
          $('#menu').removeClass('slideOutUp');
          $('#menu').addClass('d-flex slideInDown');
        } else {
          $('#menu').addClass('slideOutUp');
          $('#menu').removeClass('slideInDown');
        }
      });
    });
})(jQuery);
