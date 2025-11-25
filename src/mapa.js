import Renderizador from "./renderizador";

class Mapa {
    mapa = [
        ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "", "", "", "", "", "", "", "", "#"],
        ["#", "", "", "", "", "", "", "", "", "#"],
        ["#", "", "", "", "", "", "", "", "", "#"],
        ["#", "", "", "", "", "", "", "", "", "#"],
        ["#", "", "", "", "", "", "", "", "", "#"],
        ["#", "", "", "", "", "", "", "", "", "#"],
        ["#", "", "", "", "", "", "", "", "", "#"],
        ["#", "", "", "", "", "", "", "", "", "#"],
        ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
    ];
    tileWidth = 64;
    tileHeigth = 64;

    constructor(gameScreen) {
        this.gameScreen = gameScreen;
        this.#defineProporcaoMapa();
    }
    renderizar(elements) {
        elements.forEach((e) => {
            this.gameScreen.appendChild(e);
        });
        // Renderiza tiles estáticos e cria um elemento `.player` absoluto
        // para que possamos animar a sua posição via transform + transition.
        if (this._rendered) return;

        this.gameScreen.style.position = 'relative';

        for (let i = 0; i < this.mapa.length; i++) {
            for (let j = 0; j < this.mapa[i].length; j++) {
                const simbolo = this.mapa[i][j];
                const tile = Renderizador.createElementoBase(this.tileWidth, this.tileHeigth);
                tile.className = 'tile';
                tile.dataset.x = j;
                tile.dataset.y = i;
                tile.style.left = `${j * this.tileWidth}px`;
                tile.style.top = `${i * this.tileHeigth}px`;
                if (simbolo === "#") {
                    tile.classList.add('wall');
                }
                this.gameScreen.appendChild(tile);
            }
        }

        this._rendered = true;
    }

    /**
     * Adiciona um elemento HTML na tela do jogo.
     * @param {HTMLElement} elemento 
     */
    adicionarElementoTela(elemento) {
        this.gameScreen.appendChild(elemento);
    }

    #defineProporcaoMapa() {
        this.gameScreen.style.width = `${this.tileWidth * this.mapa[0].length}px`
        this.gameScreen.style.height = `${this.tileHeigth * this.mapa[0].length}px`
    }
}

export default Mapa;