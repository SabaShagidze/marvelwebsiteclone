// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    920: {
      slidesPerView: 4.5,
      spaceBetween: 30,
    },
    420: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    300: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    100: {
      slidesPerView: 1,
    },
  },
});

// Top Container

const topButtons = {
  topBtnOne: document.getElementById("thisW"),
  topBtnTwo: document.getElementById("lastW"),
  topBtnThree: document.getElementById("upcm"),
};

const topSections = {
  topSectionOne: document.getElementById("comicTopContOne"),
  topSectionTwo: document.getElementById("comicTopContTwo"),
  topSectionThree: document.getElementById("comicTopContThree"),
};

topButtons.topBtnOne.onclick = function () {
  topSections.topSectionOne.style.display = "Flex";
  topSections.topSectionThree.style.display = "None";
  topSections.topSectionTwo.style.display = "None";

  topButtons.topBtnTwo.classList.remove("comics-btn-active");
  topButtons.topBtnOne.classList.add("comics-btn-active");
  topButtons.topBtnThree.classList.remove("comics-btn-active");
};

topButtons.topBtnTwo.onclick = function () {
  topSections.topSectionOne.style.display = "None";
  topSections.topSectionThree.style.display = "None";
  topSections.topSectionTwo.style.display = "Flex";

  topButtons.topBtnTwo.classList.add("comics-btn-active");
  topButtons.topBtnOne.classList.remove("comics-btn-active");
  topButtons.topBtnThree.classList.remove("comics-btn-active");
};

topButtons.topBtnThree.onclick = function () {
  topSections.topSectionOne.style.display = "None";
  topSections.topSectionThree.style.display = "Flex";
  topSections.topSectionTwo.style.display = "None";

  topButtons.topBtnTwo.classList.remove("comics-btn-active");
  topButtons.topBtnOne.classList.remove("comics-btn-active");
  topButtons.topBtnThree.classList.add("comics-btn-active");
};
