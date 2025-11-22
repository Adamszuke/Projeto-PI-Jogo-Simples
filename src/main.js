import Game from './game.js';

const gameScreen = document.querySelector("#game-screen");
const terminal = document.querySelector('#terminal');

new Game(gameScreen, terminal);
