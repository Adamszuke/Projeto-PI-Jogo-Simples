function moverCima(qnt) {
    if (typeof qnt === 'undefined') {
        throw new Error('O parâmetro `qtn` é obrigatório.');
    } 
    if (typeof qnt !== 'number') {
        throw new Error('O tipo do parâmetro `qnt` deve ser "number".');
    }
    console.log(`Moveu ${qnt} blocos para cima!!`)
}

function moverBaixo(qnt) {   
    if (typeof qnt === 'undefined') {
        throw new Error('O parâmetro `qtn` é obrigatório.');
    } 
    if (typeof qnt !== 'number') {
        throw new Error('O tipo do parâmetro `qnt` deve ser "number".');
      }
      console.log(`Moveu ${qnt} blocos para baixo!!`)
    
}

function moverDireita(qnt) {
    if (typeof qnt === 'undefined') {
        console.log("entrei")
        throw new Error('O parâmetro `qtn` é obrigatório.');
    } 
    if (typeof qnt !== 'number') {
        throw new Error('O tipo do parâmetro `qnt` deve ser "number".');
      }
      console.log(`Moveu ${qnt} blocos para direita!!`)
}

function moverEsquerda(qnt) {
    if (typeof qnt === 'undefined') {
        console.log("entrei")
        throw new Error('O parâmetro `qtn` é obrigatório.');
    } 
    if (typeof qnt !== 'number') {
        throw new Error('O tipo do parâmetro `qnt` deve ser "number".');
      }
      console.log(`Moveu ${qnt} blocos para esquerda!!`)
}

export {moverCima, moverBaixo, moverDireita, moverEsquerda};

