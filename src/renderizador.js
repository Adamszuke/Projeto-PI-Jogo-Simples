/**
 * Classe utilitária para adicionar/remover/renderizar elementos do mapa.
 */
class Renderizador {

    constructor(mapa) {
        this.mapa = mapa;
    }

    /**
     * Recebe uma posição X e Y da matriz e o elemento a ser adiciona na posição.
     * @param {string} X Posição coluna.
     * @param {string} Y Posição linha.
     * @param {string} elemento Caracterer que representa algo.
     * @returns {boolean} Retorna se conseguiu adicionar o caracterer na posição fornecida. 
     */
    adicionarMapa(X, Y, elemento) {
        if (this.mapa.mapa[Y][X] === '') {
            this.mapa.mapa[Y][X] = elemento;
            return true;
        }
        return false;
    }
    /**
     * Remove/Troca um elemento do mapa.
     * @param {string} X Posição coluna.
     * @param {string} Y Posição linha.
     * @param {string} elemento Caso for informado troca o elemento atual pelo informado.
     * @returns {boolean} Retorna se conseguiu remover/trocar o caracterer na posição fornecida. 
     */
    removerMapa(X, Y, elemento) {
        if (elemento) {
            this.mapa.mapa[Y][X] = elemento;
            return true;
        }
        this.mapa.mapa[Y][X] = '';
        return true;        
    }
    /**
     * Retorna a posição do primeiro elemento fornecido.
     * @param {string} elemento Caracterer que representa algo.
     * @returns {object | null} Objeto que contém as coordenadas do elemento.
     */
    getElemento(elemento) {
        const position = this.mapa.mapa.reduce((acc, linha, x) => {
            const y = linha.indexOf(elemento);
            if (y !== -1) return { x, y };
            return acc;
        }, null);
        return position;
    }
    /**
     * Retorna um elemento html base.
     * @returns {object | null} Objeto que contém as coordenadas do elemento.
     */
    static createElementoBase(baseWidth, baseHeigth) {
        const tile = document.createElement('div');
        tile.style.width = `${baseWidth}px`;
        tile.style.height = `${baseHeigth}px`;
        tile.style.boxSizing = 'border-box';
        tile.style.position = 'absolute';
        return tile;
    }
}

export default Renderizador;