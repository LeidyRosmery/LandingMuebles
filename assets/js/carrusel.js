  $(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    // dotClass:'dots-banner',
    smartSpeed: 450,
    margin: 10,
    dots:true,
    loop:true,
    navClass:['prev-banner','next-banner'],
    nav: true,
    items:1,
    responsive:{
    0:{
        nav:false,
    },
    600:{
        nav:false,
        loop:true
    },
    992:{
        nav:true,
    }
},
    navText: ['<svg width="100%" height="100%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="100%" height="100%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
  }).on('changed.owl.carousel');
  })
