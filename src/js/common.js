jQuery(document).ready(function ($) {

  //hover buttons
  $('.js-btn').hover(function () {
        $(this).next().fadeIn(500);
      },
      function () {
        $(this).next().fadeOut(500);
      });

  //money parallax

  if($(window).width() > 992) {
    $('.port').mousemove(function (e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 20;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      $('.parallax-layer').css('top', ((52 + (ypos / 50)) + "px"));
      $('.parallax-layer').css('left', ((0 + (xpos / 80)) + "px"));
    });

    $('.port').mousemove(function (e) {
      var change;
      var xpos = e.clientX;
      var ypos = e.clientY;
      var left = change * 20;
      var xpos = xpos * 2;
      ypos = ypos * 2;
      $('.parallax-layer2').css('bottom', ((-25 + (ypos / 50)) + "px"));
      $('.parallax-layer2').css('left', ((-37 + (xpos / 80)) + "px"));
    });
  }

  //progress bar
  $(window).scroll(function () {
    var ratio = $(document).scrollTop()/(($(document).height() - $(window).height()) / 100);
    $('.progress-line').width(ratio + '%');
  });

  //modal
  $('[data-fancybox]').fancybox({
    src: '#modal',
    closeTpl : '<div class="modal__close js-close"></div>'
  });


  //send form
  $('#form').submit(function (e) {
    e.preventDefault();

    var tel = $('input[type="tel"]').val();
    var reg = /^\d{10,15}$/;
    if(reg.test(tel)) {
      var form_data = $(this).serialize();
      $.ajax({
        type: 'POST',
        url: 'send.php',
        data: form_data,
        success: function () {
          $('.js-form').fadeOut(500);
          $('.js-tnx').fadeIn(700);
          setTimeout(function() {
            location.reload();
          },3000);
        },
        error: function () {
          alert('При отправке сообщения произошла ошибка!');
        }
      });
    } else {
      alert('В этом поле разрешены только цифры от 10 до 15 символов!');
    }
  });

});
  
  
  
