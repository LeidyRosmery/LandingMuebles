  $(document).ready(function() {
$('.slider-drag1').slick({
 slidesToShow: 1,
 slidesToScroll: 1,
 dots: true,
 fade: true,
 cssEase: 'linear',
 arrows: true,
     swipe: false,
 autoplaySpeed: 8000,
 autoplay: true,
 vertical: false,
 infinite: true,
 responsive: [{
     breakpoint: 992,
     settings: {
       slidesToShow: 1,
       autoplay: true,
       swipe: true,
       arrows:false,
     }
   },
   {
     breakpoint: 480,
     settings: {
       slidesToShow: 1,
       arrows: false,
       dots: true,
       autoplay: true,
       swipe: true,
     }
   }
 ]
});

    $('.slider-for').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      cssEase: 'linear',
      swipe: true,
      asNavFor: '.slider-nav',
      // autoplay: true
    });

    $('.slider-nav').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      asNavFor: '.slider-for',
      dots: false,
      arrows:true,
      centerMode: true,
      focusOnSelect: true,
      responsive: [{
        breakpoint: 992,
        settings: "unslick"
      }]
    });

  })
