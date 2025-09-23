"use strict";

// DOM Elements
const allCells = document.querySelectorAll(".cell");
const indicatorEl = document.querySelector(".player-icon");
const replayBtn = document.querySelector(".btn-replay");

// Status Variables
let turn = "x";
const board = ["", "", "", "", "", "", "", "", ""];

const initializeGame = function () {
  turn = "x";
  board.fill("");

  for (let i = 0; i < allCells.length; i++) {
    allCells[i].innerHTML = "";
  }

  indicatorEl.src = "./assets/silver-x.svg";
};

const renderBoard = function () {};

const cellClicked = function (index) {
  const cellSelected = document.querySelector(`.cell--${index}`);

  if (board[index] === "") {
    board[index] = turn;
    cellSelected.innerHTML = `<img src="./assets/icon-${turn}.svg" alt="player symbol" />`;
    turn = turn === "x" ? "o" : "x";

    indicatorEl.src = `./assets/silver-${turn}.svg`;
  }
};

for (let i = 0; i < allCells.length; i++) {
  allCells[i].addEventListener("click", () => cellClicked(i));
}

replayBtn.addEventListener("click", initializeGame);
