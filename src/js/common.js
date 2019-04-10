jQuery(document).ready(function ($) {

  $(window).scroll(function () {
    var ratio = $(document).scrollTop()/(($(document).height() - $(window).height()) / 100);
    $('.progress-line').width(ratio + '%');
  });

  //open modal
  var modal = $('#modal'),
    layout = $('.modal-layout');

  $('.js-btn').on('click', function (e) {
    e.preventDefault();
    layout.fadeIn(400);
    modal.fadeIn(600);
    $('body').css('overflow', 'hidden');
  });

  $('.js-close, .modal-layout').on('click', function (e) {
    e.preventDefault();
    layout.fadeOut(400);
    modal.fadeOut(600);
    $('body').css('overflow', 'auto');
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
  
  
  
