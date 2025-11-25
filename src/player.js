import Renderizador from "./renderizador";

class Player {

    constructor(X, Y, mapa, renderizador) {
        this.simbolo = 'P';
        this.position = {
            x: X,
            y: Y,
        };
        this.mapa = mapa;
        this.renderizador = renderizador;
        this.renderizador.adicionarMapa(this.position.x, this.position.y, this.simbolo);
        this.element = this.#create();
    }

    /**
     * Cria o elemento Player.
     * @returns {HTMLElement} elemento
     */
    #create() {
        const elemento = Renderizador.createElementoBase(this.mapa.tileWidth, this.mapa.tileHeigth);
        elemento.className = 'player';
        elemento.innerHTML = '🐒'; 
        elemento.style.position = 'absolute';
        elemento.style.transition = 'transform 300ms ease';
        elemento.style.zIndex = 5;
        elemento.style.transform = `translate(
            ${this.position.x * this.mapa.tileWidth}px,
            ${this.position.y * this.mapa.tileHeigth}px
        )`;

        return elemento;
    }

    moverPara(novoX, novoY) {
        const { x, y } = this.position;
        this.mapa.mapa[y][x] = "";
        this.mapa.mapa[novoY][novoX] = "P";
        this.position = { x: novoX, y: novoY };
        this.element.style.transform = `translate(
            ${novoX * this.mapa.tileWidth}px,
            ${novoY * this.mapa.tileHeigth}px
        )`;
    }
}

export default Player;
