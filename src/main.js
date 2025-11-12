import Interpretador from './interpretador.js'
import Mapa from './mapa.js';
import { moverCima, moverBaixo, moverDireita, moverEsquerda } from './metodos.js';
import atualizaHistorico from './utils/historico-terminal.js'

const metodosDisponiveis = {
  'TESTE': () => { console.log('Teste') },
  'PARAMETROS': (parametroString, parametroNumber) => {
    if (!parametroString) {
      throw new Error('O parâmetro `parametroString` é obrigatório.');
    }
    if (typeof parametroString !== 'string') {
      throw new Error('O tipo do parâmetro parametroString deve ser "string".');
    }
    if (parametroNumber) {
      if (typeof parametroNumber !== 'number') {
        throw new Error('O tipo do parâmetro `parametroNumber` deve ser "number".');
      }
    }
    console.log(`Parâmetro: ${parametroString}, ${parametroNumber}`);
  },
  "moverCima": moverCima, 
  "moverBaixo": moverBaixo, 
  "moverDireita": moverDireita, 
  "moverEsquerda": moverEsquerda,
};

const gameScreen = document.querySelector("#game-screen")
const mapa = new Mapa(gameScreen);
mapa.renderizar()
const interpretador = new Interpretador(metodosDisponiveis);
const terminal = document.querySelector('#terminal');
terminal.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    interpretador.executar(event.target.value);
    atualizaHistorico(event.target.value)
    event.target.value = '';
  }
});