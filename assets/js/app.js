var widthWindows = $(window).width();
$('.categoria').on('click', function(e) {
  $('.nombre-categoria span').removeClass('glyphicon-menu-up');
  $('.nombre-categoria span').addClass('glyphicon-menu-down');
  $('.menu').css('display', 'none');
  $('.nombre-categoria').removeClass('active');
  e.preventDefault();
  $(this).next().toggleClass('mostrar', function(e) {
    if ($(this).is(".mostrar")) {
      $(this).prev().find('.nombre-categoria').addClass('active');
      $(this).prev().find('.nombre-categoria span').removeClass('glyphicon-menu-down');
      $(this).prev().find('.nombre-categoria span').addClass('glyphicon-menu-up');
      $(this).fadeIn();
    } else {
      $(this).prev().find('.nombre-categoria').removeClass('active');
      $(this).prev().find('.nombre-categoria span').removeClass('glyphicon-menu-up');
      $(this).prev().find('.nombre-categoria span').addClass('glyphicon-menu-down');
    }
  });
});
var init = false;
$("#more").on('click', function() {
  console.log(init);
  if (init) {
    $('#more').html('CARGAR MAS VIDEOS<span class="arrow arrow-video arrow-categoria glyphicon glyphicon-menu-down"></span>');
    $('.div-video').removeClass('fadeInRight');
    $('.div-video').addClass('fadeOutRight');
    init = false;
  } else {
    $('.div-video').addClass('fadeInRight');
    $('.div-video').removeClass('fadeOutRight');
    $('#more').html('CARGAR MENOS VIDEOS<span class="arrow arrow-video arrow-categoria glyphicon glyphicon-menu-up"></span>');
    init = true;
  }
  $('.div-video').toggleClass('hidden-video', function(e) {});

});


$(document).ready(function() {
  if (widthWindows > 992) {
    // $('.menu').removeClass('fadeInDown');
      // $('.menu').addClass('fadeInLeft');
    $('#carrusel-banner .owl-dot').empty();
    $('.link-banner').on('click', function(e) {
      e.preventDefault();
    });
    $('.link-video-tip .div-play').attr('src', '/assets/img/video-tip/play_blanco.svg');
    $('.link-video-tip').on('click', function(e) {
      $('.link-video-tip').css('border-top', '3px transparent solid');
      $('.link-video-tip').css('background-color', 'background-color: rgba(0, 0, 0, 0.4)');
      $(this).css('border-top', '3px blue solid');
      $(this).css('background-color', 'rgba(0, 0, 0, 0.1)');
      var www = this.href;
      console.log(www);
      var f = function() {
        window.location.href = www
      };
      setTimeout(f, 1500);
    })
  } else {
    if (widthWindows <= 992) {
      //$('.slider-nav').slick('unslick');
    }
  }
});
$(window).resize(function() {
  if (widthWindows > 992) {
    $('.link-video-tip').on('click', function(e) {
      e.preventDefault();
      $('.link-video-tip').css('border-top', '3px transparent solid');
      $('.link-video-tip').css('background-color', 'background-color: rgba(0, 0, 0, 0.4)');
      $(this).css('border-top', '3px blue solid');
      $(this).css('background-color', 'rgba(0, 0, 0, 0.1)');

    })
  } else {
    if (widthWindows <= 992) {
      //$('.slider-nav').slick('unslick');
    }
  }
});
