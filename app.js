"use strict";

// DOM Elements
const allCells = document.querySelectorAll(".cell");
const indicatorEl = document.querySelector(".player-icon");
const replayBtn = document.querySelector(".btn-replay");
const resultIcon = document.querySelector(".result-icon");
const resultText = document.querySelector(".result-text");
const resultModal = document.querySelector(".result-modal");
const overlayEl = document.querySelector(".overlay");

// Status Variables
let turn = "x";
const board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;

const WIN_LINES = [
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
const renderBoard = function () {};

const initializeGame = function () {
  turn = "x";
  board.fill("");

  for (let i = 0; i < allCells.length; i++) {
    allCells[i].innerHTML = "";
    allCells[i].classList.remove("winning-cell");
  }

  indicatorEl.src = "./assets/silver-x.svg";
};

const cellClicked = function (index) {
  const cellSelected = document.querySelector(`.cell--${index}`);

  if (board[index] === "") {
    board[index] = turn;
    cellSelected.innerHTML = `<img src="./assets/icon-${turn}.svg" alt="player symbol" />`;

    board[index] = turn;

    const result = checkWinner(board);
    if (result.hasWon) {
      gameOver = true;

      for (let i = 0; i < 3; i++) {
        console.log(allCells[i]);
        allCells[result.line[i]].classList.add("winning-cell");
      }

      showResult(result);
    }

    turn = turn === "x" ? "o" : "x";

    indicatorEl.src = `./assets/silver-${turn}.svg`;
  }
};

const checkWinner = function (board) {
  for (const line of WIN_LINES) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { hasWon: true, winner: board[a], line };
    }
  }
  return { hasWon: false, winner: null, line: null };
};

function showResult({ winner }) {
  if (winner === null) {
    resultIcon.classList.add("hidden");
    resultText.textContent = "Round Tied";
  } else {
    resultIcon.classList.remove("hidden");
    resultIcon.src = `./assets/icon-${winner}.svg`;
    resultText.textContent = "WINS";
  }

  resultModal.classList.remove("hidden");
  overlayEl.classList.remove("hidden");

  setTimeout(() => {
    resultModal.classList.add("hidden");
    overlayEl.classList.add("hidden");
  }, 2000);
}

// Event Listeners
for (let i = 0; i < allCells.length; i++) {
  allCells[i].addEventListener("click", () => cellClicked(i));
}

replayBtn.addEventListener("click", initializeGame);
