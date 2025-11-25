import Renderizador from "./renderizador";

class Inimigo {

    constructor(X, Y, mapa, renderizador) {
        this.simbolo = 'E';
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
     * Cria o elemento Inimigo.
     * @returns {HTMLElement} elemento
     */
    #create() {
        const elemento = Renderizador.createElementoBase(this.mapa.tileWidth, this.mapa.tileHeigth);
        elemento.className = 'inimigo';
        elemento.style.left = `${this.position.x * this.mapa.tileWidth}px`;
        elemento.style.top = `${this.position.y * this.mapa.tileHeigth}px`;
        elemento.style.zIndex = 5;

        return elemento;
    }

    remover() {
        this.element.remove();
        this.renderizador.removerMapa(this.position.y, this.position.x);
    }
}

export default Inimigo;