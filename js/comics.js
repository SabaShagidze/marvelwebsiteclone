// Top Container

const topButtons = {
  thisWeek: document.getElementById("thisWeek"),
  lastWeek: document.getElementById("lastWeek"),
  upcoming: document.getElementById("upcm"),
};

const topSections = {
  SthisW: document.getElementById("thisWeekSection"),
  SlastW: document.getElementById("lastWeekSection"),
  Supcm: document.getElementById("upcomingSection"),
};

topButtons.thisWeek.onclick = function () {
  topSections.SthisW.style.display = "flex";
  topSections.SlastW.style.display = "none";
  topSections.Supcm.style.display = "none";

  topButtons.thisWeek.classList.add("comics-btn-active");
  topButtons.lastWeek.classList.remove("comics-btn-active");
  topButtons.upcoming.classList.remove("comics-btn-active");
};
topButtons.lastWeek.onclick = function () {
  topSections.SthisW.style.display = "none";
  topSections.SlastW.style.display = "flex";
  topSections.Supcm.style.display = "none";

  topButtons.thisWeek.classList.remove("comics-btn-active");
  topButtons.lastWeek.classList.add("comics-btn-active");
  topButtons.upcoming.classList.remove("comics-btn-active");
};
topButtons.upcoming.onclick = function () {
  topSections.SthisW.style.display = "none";
  topSections.SlastW.style.display = "none";
  topSections.Supcm.style.display = "flex";

  topButtons.thisWeek.classList.remove("comics-btn-active");
  topButtons.lastWeek.classList.remove("comics-btn-active");
  topButtons.upcoming.classList.add("comics-btn-active");
};

// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4.5,
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
      slidesPerView: 2,
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

// Top Container

// const topButtons = {
//   topBtnOne: document.getElementById("thisWeek"),
//   topBtnTwo: document.getElementById("lastWeek"),
//   topBtnThree: document.getElementById("upcm"),
// };

// topButtons.topBtnOne.onclick = function () {
//     alert("wha")
// }

// const topSections = {
//   topSectionOne: document.getElementById("comicTopContOne"),
//   topSectionTwo: document.getElementById("comicTopContTwo"),
//   topSectionThree: document.getElementById("comicTopContThree"),
// };

// topButtons.topBtnOne.onclick = function () {
//   topSections.topSectionOne.style.display = "Flex";
//   topSections.topSectionThree.style.display = "None";
//   topSections.topSectionTwo.style.display = "None";

//   topButtons.topBtnTwo.classList.remove("comics-btn-active");
//   topButtons.topBtnOne.classList.add("comics-btn-active");
//   topButtons.topBtnThree.classList.remove("comics-btn-active");
// };

// topButtons.topBtnTwo.onclick = function () {
//   topSections.topSectionOne.style.display = "None";
//   topSections.topSectionThree.style.display = "None";
//   topSections.topSectionTwo.style.display = "Flex";

//   topButtons.topBtnTwo.classList.add("comics-btn-active");
//   topButtons.topBtnOne.classList.remove("comics-btn-active");
//   topButtons.topBtnThree.classList.remove("comics-btn-active");
// };

// topButtons.topBtnThree.onclick = function () {
//   topSections.topSectionOne.style.display = "None";
//   topSections.topSectionThree.style.display = "Flex";
//   topSections.topSectionTwo.style.display = "None";

//   topButtons.topBtnTwo.classList.remove("comics-btn-active");
//   topButtons.topBtnOne.classList.remove("comics-btn-active");
//   topButtons.topBtnThree.classList.add("comics-btn-active");
// };
