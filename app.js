"use strict";

// DOM Elements
const allCells = document.querySelectorAll(".cell");

for (let i = 0; i < allCells.length; i++) {
  allCells[i].addEventListener("click", () => cellClicked(i));
}

const initializeGame = function () {};

const renderBoard = function () {};

const cellClicked = function (index) {
  const cellSelected = document.querySelector(`.cell--${index}`);
  cellSelected.innerHTML = `<img src="./assets/icon-x.svg" atr="icon" />`;
};
