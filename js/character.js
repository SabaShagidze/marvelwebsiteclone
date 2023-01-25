// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 6,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    920: {
      slidesPerView: 6,
      spaceBetween: 30,
    },
    420: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    300: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    100: {
      slidesPerView: 1,
    },
  },
});

// Full Swiper
var swiper = new Swiper(".mySwiperFull", {});

useEffect(() => {
  swiper.init();
}, []);

// browse
