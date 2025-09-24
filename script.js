"use strict";

// DOM Elements
const cells = document.querySelectorAll(".cell");
const indicatorIcon = document.querySelector(".player-icon");
const indicatorText = document.querySelector(".indicator-text");
const replayBtn = document.querySelector(".btn-replay");
const resultIcon = document.querySelector(".result-icon");
const resultText = document.querySelector(".result-text");
const resultModal = document.querySelector(".overlay");

// State Variables
let currentPlayer = "x";
let board = ["", "", "x", "", "", "", "", "", ""];
let gameOver = false;
const WINNING_LINES = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Functions

/**
 * Setting up initial values of all the DOM elements and status variables
 */
const initializeGame = function () {
  currentPlayer = "x";
  gameOver = false;
  board = ["", "", "x", "", "", "", "", "", ""];

  renderBoard();

  indicatorIcon.classList.remove("hidden");
  indicatorIcon.src = "./assets/silver-x.svg";
  indicatorText.textContent = "TURN";

  resultIcon.classList.remove("hidden");
  resultModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

/**
 * Looping through all the 9 cells of the board
 * Removing "Winning" styles
 * Updating each cell's content based on the current status of the board
 * array
 */
const renderBoard = function () {
  for (let i = 0; i < board.length; i++) {
    const cell = cells[i];
    cell.classList.remove("winning-cell");
    cell.innerHTML = board[i]
      ? `<img src="./assets/icon-${board[i]}.svg" alt="player symbol" />`
      : "";
  }
};

const cellClicked = function () {};

// Event Listeners

/**
 * Adding event listener to each cell of the board
 */
for (let i = 0; i < cells.length; i++) {
  const cell = cells[i];
  cell.addEventListener("click", cellClicked);
}

/**
 * Adding event listener to replay button
 */
replayBtn.addEventListener("click", initializeGame);
