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
let board = ["", "", "", "", "", "", "", "", ""];
let gameOver = false;
