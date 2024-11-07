new Swiper('.card-wrapper', {
    // direction: 'vertical',
    loop: true,
  
    // pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // responsive 
  breakpoints:{
    0:{
        slidesPerView: 1
    },
    520:{
        slidesPerView: 2
    },
    768:{
        slidesPerView: 3
    },
    1024:{
        slidesPerView: 4
    }
  },

    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });