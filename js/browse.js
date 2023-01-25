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

const whoBox = {
  whoOne: document.getElementById("whoOne"),
  whoTwo: document.getElementById("whoTwo"),
  whoThree: document.getElementById("whoThree"),
  whoFour: document.getElementById("whoFour"),
  whoFive: document.getElementById("whoFive"),
  whoSix: document.getElementById("whoSix"),
};

const whoInnerBox = {
  whoInnerOne: document.getElementById("whoInnerOne"),
  whoInnerTwo: document.getElementById("whoInnerTwo"),
  whoInnerThree: document.getElementById("whoInnerThree"),
  whoInnerFour: document.getElementById("whoInnerFour"),
  whoInnerFive: document.getElementById("whoInnerFive"),
  whoInnerSix: document.getElementById("whoInnerSix"),
};

whoBox.whoOne.onmouseenter = function () {
  whoInnerBox.whoInnerOne.style.display = "flex";
};
whoBox.whoOne.onmouseleave = function () {
  whoInnerBox.whoInnerOne.style.display = "none";
};

whoBox.whoTwo.onmouseenter = function () {
  whoInnerBox.whoInnerTwo.style.display = "flex";
};
whoBox.whoTwo.onmouseleave = function () {
  whoInnerBox.whoInnerTwo.style.display = "none";
};

whoBox.whoThree.onmouseenter = function () {
  whoInnerBox.whoInnerThree.style.display = "flex";
};
whoBox.whoThree.onmouseleave = function () {
  whoInnerBox.whoInnerThree.style.display = "none";
};

whoBox.whoFour.onmouseenter = function () {
  whoInnerBox.whoInnerFour.style.display = "flex";
};
whoBox.whoFour.onmouseleave = function () {
  whoInnerBox.whoInnerFour.style.display = "none";
};

whoBox.whoFive.onmouseenter = function () {
  whoInnerBox.whoInnerFive.style.display = "flex";
};
whoBox.whoFive.onmouseleave = function () {
  whoInnerBox.whoInnerFive.style.display = "none";
};

whoBox.whoSix.onmouseenter = function () {
  whoInnerBox.whoInnerSix.style.display = "flex";
};
whoBox.whoSix.onmouseleave = function () {
  whoInnerBox.whoInnerSix.style.display = "none";
};


