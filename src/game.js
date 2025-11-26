import Mapa from "./mapa.js";
import Renderizador from "./renderizador";
import Interpretador from "./interpretador.js";
import Player from "./player";
import Inimigo from "./inimigo";
import atualizaHistorico from './utils/historico-terminal.js'
import { moverCima, moverBaixo, moverDireita, moverEsquerda, atacar } from './metodos.js';

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
        this.#initListenerInimigoDerrotado();
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
            'ATACAR': (direcao) => atacar.bind(this)(direcao),
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
    #initListenerInimigoDerrotado() {
        document.addEventListener('inimigoDerrotado', () => {
            setTimeout(() => { this.gerarNovoInimigo() }, 2000)
        });
    }

    gerarNovoInimigo() {
        const locaisVazios = [];
        for (let i = 0; i < this.mapa.mapa.length; i++) {
            for (let j = 0; j < this.mapa.mapa[i].length; j++) {
                if (this.mapa.mapa[i][j] === "") {
                    locaisVazios.push({ y: i, x: j });
                }
            }
        }

        if (locaisVazios.length === 0) return;
        const sorteado = locaisVazios[Math.floor(Math.random() * locaisVazios.length)];
        this.inimigo = new Inimigo(sorteado.y, sorteado.x, this.mapa, this.renderizador);
        this.mapa.renderizar([this.inimigo.element]);
        console.log(`Inimigo gerado { x: ${sorteado.x} y: ${sorteado.y} }`);
    }
}

export default Game;
