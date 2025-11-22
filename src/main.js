import Interpretador from './interpretador.js'
import Mapa from './mapa.js';
import { moverCima, moverBaixo, moverDireita, moverEsquerda } from './metodos.js';
import atualizaHistorico from './utils/historico-terminal.js'

const metodosDisponiveis = {
  "moverCima": (qnt) => moverCima(qnt, mapa), 
  "moverBaixo": (qnt) => moverBaixo(qnt, mapa),
  "moverDireita": (qnt) => moverDireita(qnt, mapa), 
  "moverEsquerda": (qnt) => moverEsquerda(qnt, mapa),
};

const gameScreen = document.querySelector("#game-screen")
const mapa = new Mapa(gameScreen);
mapa.renderizar()
const interpretador = new Interpretador(metodosDisponiveis);
const terminal = document.querySelector('#terminal');
terminal.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    atualizaHistorico(event.target.value)
    atualizaHistorico(interpretador.executar(event.target.value));
    event.target.value = '';
  }
});