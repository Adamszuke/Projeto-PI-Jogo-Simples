class Mapa {
    mapa = [
        ["#", "#", "#", "#", "#", "#", "#", "#", "#", "#"],
        ["#", "", "", "", "", "", "", "", "", "#"],
        ["#", "", "", "", "", "", "", "", "", "#"],
        ["#", "", "", "", "", "", "", "", "", "#"],
        ["#", "", "", "", "", "", "", "", "", "#"],
        ["#", "", "", "", "", "P", "", "", "", "#"],
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

    renderizar() {
        for (let i = 0; i < this.mapa.length; i++) {
            for (let j = 0; j < this.mapa[i].length; j++) {
                const simbolo = this.mapa[i][j];
                const tile = document.createElement("div");
                tile.style.width = `${this.tileWidth}px`;
                tile.style.height = `${this.tileHeigth}px`;
                if (simbolo === "#") {
                    tile.style.backgroundColor = 'black';
                }
                if (simbolo === "P") {
                    tile.style.backgroundColor = 'green';
                }
                this.gameScreen.appendChild(tile);
            }
        }
    }
    #defineProporcaoMapa() {
        this.gameScreen.style.width = `${this.tileWidth * this.mapa[0].length}px`
        this.gameScreen.style.height = `${this.tileHeigth * this.mapa[0].length}px`
    }
}

export default Mapa;