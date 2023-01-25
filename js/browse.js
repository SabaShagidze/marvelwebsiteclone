const browseOne = document.getElementById("browseCardHolderOne");
const browseTwo = document.getElementById("browseCardHolderTwo");

const browseBtnOne = document.getElementById("browseBtnOne");
const browseBtnTwo = document.getElementById("browseBtnTwo");

browseBtnTwo.onclick = function () {
  browseOne.style.display = "none";
  browseTwo.style.display = "flex";
};

browseBtnOne.onclick = function () {
  browseOne.style.display = "flex";
  browseTwo.style.display = "none";
};