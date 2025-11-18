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
        // Renderiza tiles estáticos e cria um elemento `.player` absoluto
        // para que possamos animar a sua posição via transform + transition.
        if (this._rendered) return;

        this.gameScreen.style.position = 'relative';

        for (let i = 0; i < this.mapa.length; i++) {
            for (let j = 0; j < this.mapa[i].length; j++) {
                const simbolo = this.mapa[i][j];
                const tile = document.createElement("div");
                tile.className = 'tile';
                tile.dataset.x = j;
                tile.dataset.y = i;
                tile.style.width = `${this.tileWidth}px`;
                tile.style.height = `${this.tileHeigth}px`;
                tile.style.boxSizing = 'border-box';
                tile.style.position = 'absolute';
                tile.style.left = `${j * this.tileWidth}px`;
                tile.style.top = `${i * this.tileHeigth}px`;
                if (simbolo === "#") {
                    tile.classList.add('wall');
                }
                this.gameScreen.appendChild(tile);
            }
        }

        // Cria o elemento do jogador (apenas um) e posiciona conforme "P" no mapa
        const pos = this.mapa.reduce((acc, row, y) => {
            const x = row.indexOf('P');
            if (x !== -1) return { x, y };
            return acc;
        }, null);

        this.playerElement = document.createElement('div');
        this.playerElement.className = 'player';
        this.playerElement.style.width = `${this.tileWidth}px`;
        this.playerElement.style.height = `${this.tileHeigth}px`;
        this.playerElement.style.position = 'absolute';
        this.playerElement.style.left = '0px';
        this.playerElement.style.top = '0px';
        this.playerElement.style.transform = `translate(${(pos?.x ?? 0) * this.tileWidth}px, ${(pos?.y ?? 0) * this.tileHeigth}px)`;
        this.playerElement.style.transition = 'transform 300ms ease';
        this.playerElement.style.zIndex = 5;
        this.gameScreen.appendChild(this.playerElement);

        this.playerPos = pos || { x: 0, y: 0 };
        this._rendered = true;
    }

    movePlayerTo(novoY, novoX) {
        // Atualiza o mapa e anima o elemento do jogador até a nova posição
        const atual = this.playerPos;
        if (!atual) return;

        // Atualiza matriz lógica
        this.mapa[atual.y][atual.x] = '';
        this.mapa[novoY][novoX] = 'P';

        // Atualiza posição interna
        this.playerPos = { x: novoX, y: novoY };

        // Move com transição CSS
        const left = novoX * this.tileWidth;
        const top = novoY * this.tileHeigth;
        this.playerElement.style.transform = `translate(${left}px, ${top}px)`;
    }
    #defineProporcaoMapa() {
        this.gameScreen.style.width = `${this.tileWidth * this.mapa[0].length}px`
        this.gameScreen.style.height = `${this.tileHeigth * this.mapa[0].length}px`
    }
}

export default Mapa;