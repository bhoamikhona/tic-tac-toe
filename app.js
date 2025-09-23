"use strict";

// DOM Elements
const allCells = document.querySelectorAll(".cell");

// Status Variables
let turn = "x";

for (let i = 0; i < allCells.length; i++) {
  allCells[i].addEventListener("click", () => cellClicked(i));
}

const initializeGame = function () {};

const renderBoard = function () {};

const cellClicked = function (index) {
  const cellSelected = document.querySelector(`.cell--${index}`);

  if (cellSelected.innerHTML === "") {
    cellSelected.innerHTML = `<img src="./assets/icon-${turn}.svg" alt="player symbol" />`;
    turn = turn === "x" ? "o" : "x";
  }
};
