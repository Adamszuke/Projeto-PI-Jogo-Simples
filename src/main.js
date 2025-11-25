import Game from './game.js';
import Interpretador from './interpretador.js'
import Mapa from './mapa.js';
import { moverCima, moverBaixo, moverDireita, moverEsquerda } from './metodos.js';

const metodosDisponiveis = {
  'TESTE': (params, game) => { console.log(game) },
  'PARAMETROS': (parametroString, parametroNumber, game) => {
    if (!parametroString) {
      throw new Error('O parâmetro `parametroString` é obrigatório.');
    }
    if (typeof parametroString !== 'string') {
      throw new Error('O tipo do parâmetro parametroString deve ser "string".');
    }
    if (parametroNumber && typeof parametroNumber !== 'number') {
      throw new Error('O tipo do parâmetro `parametroNumber` deve ser "number".');
    }
    console.log(`Parâmetro: ${parametroString}, ${parametroNumber}`);
  },

  "moverCima": (qnt, game) => moverCima(qnt, game),
  "moverBaixo": (qnt, game) => moverBaixo(qnt, game),
  "moverDireita": (qnt, game) => moverDireita(qnt, game),
  "moverEsquerda": (qnt, game) => moverEsquerda(qnt, game),
};
const gameScreen = document.querySelector("#game-screen");
const terminal = document.querySelector('#terminal');

new Game(gameScreen, terminal);
