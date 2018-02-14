var widthWindows = $(window).width();
$('.enlace-categoria').on('click', function(e) {
  $('.menu').css('display', 'none');
  // $('.menu').removeClass('mostrar');
  // $(this).next().addClass('mostrar');
  $('.nombre-categoria').removeClass('active');
  e.preventDefault();
  $(this).next().toggleClass('mostrar', function(e) {
      if ($(this).is(".mostrar")) {
      $(this).prev().find('.nombre-categoria').addClass('active');
      $(this).fadeIn();
    } else {
    $(this).prev().find('.nombre-categoria').removeClass('active');
      $(this).fadeOut();
    }
  });
  // $(this).find('.nombre-categoria').toggleClass('active');
});

$(document).ready(function() {
  if (widthWindows > 992) {
    $('#carrusel-banner .owl-dot').empty();
  }
});
