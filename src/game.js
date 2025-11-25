import Mapa from "./mapa.js";
import Renderizador from "./renderizador";
import Interpretador from "./interpretador.js";
import Player from "./player";
import Inimigo from "./inimigo";
import atualizaHistorico from './utils/historico-terminal.js'
import { moverCima, moverBaixo, moverDireita, moverEsquerda } from './metodos.js';

class Game {

    constructor(gameScreen, terminalElement) {
        this.mapa = new Mapa(gameScreen);
        this.renderizador = new Renderizador(this.mapa);
        const metodos = this.#definirComandos();
        this.interpretador = new Interpretador(metodos);
        
        this.player = new Player(6, 5, this.mapa, this.renderizador);
        this.inimigo = new Inimigo(6, 2, this.mapa, this.renderizador);

        this.mapa.renderizar([this.player.element, this.inimigo.element])
        this.#initListenerTerminal(terminalElement);
    }

    #definirComandos() {
        return {
            'TESTE': () => { console.log(this.mapa.mapa) },
            'moverCima': (qnt) => moverCima.bind(this)(qnt),
            'moverBaixo': (qnt) => moverBaixo.bind(this)(qnt),
            'moverDireita': (qnt) => moverDireita.bind(this)(qnt),
            'moverEsquerda': (qnt) => moverEsquerda.bind(this)(qnt),
        };
    }

    #initListenerTerminal(terminal) {
        terminal.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                this.interpretador.executar(event.target.value);

                atualizaHistorico(event.target.value);
                event.target.value = '';
            }
        });
    }
}

export default Game;
