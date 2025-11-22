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
            'MAPA': () => {
                console.log(this.mapa.mapa);
                const textoPlayerPos = `{ x: ${this.player.position.x}, y: ${this.player.position.y} }`
                const textoInimigoPos = `{ x: ${this.inimigo.position.x}, y: ${this.inimigo.position.y}`
                return `Player Pos: ${textoPlayerPos}; Inimigo Pos: ${textoInimigoPos} }`;
            },
            'MOVERCIMA': (qnt) => moverCima.bind(this)(qnt),
            'MOVERBAIXO': (qnt) => moverBaixo.bind(this)(qnt),
            'MOVERDIREITA': (qnt) => moverDireita.bind(this)(qnt),
            'MOVERESQUERDA': (qnt) => moverEsquerda.bind(this)(qnt),
        };
    }

    #initListenerTerminal(terminal) {
        terminal.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                atualizaHistorico(event.target.value);
                atualizaHistorico(this.interpretador.executar(event.target.value));
                event.target.value = '';
            }
        });
    }
}

export default Game;
