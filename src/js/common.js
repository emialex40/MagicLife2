jQuery(document).ready(function ($) {

  $(window).scroll(function () {
    var ratio = $(document).scrollTop()/(($(document).height() - $(window).height()) / 100);
    $('.progress-line').width(ratio + '%');
  });

  $('[data-fancybox]').fancybox({
    baseClass: 'fancybox-custom-layout',
    margin: 0
  });

});
  
  
  
