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
const cellClicked = function () {};

const initializeGame = function () {
  currentPlayer = "x";
  gameOver = false;
  board = ["", "", "x", "", "", "", "", "", ""];
};

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
