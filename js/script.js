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
const modalOne = document.getElementById("openModalOne");
const modalCloseButton = document.getElementById("modalX");
let iframe = document.querySelectorAll("iframe");
modalOpenButton.onclick = function () {
  modalOne.style.display = "flex";
};

modalCloseButton.onclick = function () {
  modalOne.style.display = "none";
};
