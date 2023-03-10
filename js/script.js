// Hamburger Menu

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

// Modals
const modalOpenButton = document.getElementById("modalOpenOne");
const modalOpenButtonTwo = document.getElementById("modalOpenTwo");
const modalOpenButtonThree = document.getElementById("modalOpenThree");
const modalOpenButtonFour = document.getElementById("modalOpenFour");

const modalOne = document.getElementById("openModalOne");
const modalTwo = document.getElementById("openModalTwo");
const modalThree = document.getElementById("openModalThree");
const modalFour = document.getElementById("openModalFour");

const modalCloseButton = document.getElementById("modalX");
const modalCloseButtonTwo = document.getElementById("modalXtwo");
const modalCloseButtonThree = document.getElementById("modalXthree");
const modalCloseButtonFour = document.getElementById("modalXfour");

modalOpenButton.onclick = function () {
  modalOne.style.display = "flex";
};
modalOpenButtonTwo.onclick = function () {
  modalTwo.style.display = "flex";
};
modalOpenButtonThree.onclick = function () {
  modalThree.style.display = "flex";
};
modalOpenButtonFour.onclick = function () {
  modalFour.style.display = "flex";
};

modalCloseButton.onclick = function () {
  modalOne.style.display = "none";
  document.getElementById("video").pause();
};
modalCloseButtonTwo.onclick = function () {
  modalTwo.style.display = "none";
  document.getElementById("videoTwo").pause();
};
modalCloseButtonThree.onclick = function () {
  modalThree.style.display = "none";
  document.getElementById("videoThree").pause();
};
modalCloseButtonFour.onclick = function () {
  modalFour.style.display = "none";
  document.getElementById("videoFour").pause();
};

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
