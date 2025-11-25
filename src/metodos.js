import encontrarPlayer from "./utils/encontrar-player";

function moverCima(qnt) {
  if (typeof qnt === 'undefined') throw new Error('O parâmetro `qnt` é obrigatório.');
  if (typeof qnt !== 'number') throw new Error('O tipo do parâmetro `qnt` deve ser "number".');

  const pos = this.player.position;
  const novoY = pos.y - qnt;
  const novoX = pos.x;
  if (novoY < 0 || this.mapa.mapa[novoY][novoX] === "#") {
    console.warn("🚫 Movimento bloqueado por parede ou limite do mapa.");
    return;
  }
  this.player.moverPara(novoX, novoY);

  console.log(`Moveu ${qnt} bloco(s) para cima!`);
}

function moverBaixo(qnt) {
  if (typeof qnt === 'undefined') throw new Error('O parâmetro `qnt` é obrigatório.');
  if (typeof qnt !== 'number') throw new Error('O tipo do parâmetro `qnt` deve ser "number".');

  const pos = this.player.position;
  const novoY = pos.y + qnt;
  const novoX = pos.x;

  if (novoY >= this.mapa.mapa.length || this.mapa.mapa[novoY][novoX] === "#") {
    console.warn("🚫 Movimento bloqueado por parede ou limite do mapa.");
    return;
  }
  this.player.moverPara(novoX, novoY);

  console.log(`Moveu ${qnt} bloco(s) para baixo!`);
}

function moverDireita(qnt) {
  if (typeof qnt === 'undefined') throw new Error('O parâmetro `qnt` é obrigatório.');
  if (typeof qnt !== 'number') throw new Error('O tipo do parâmetro `qnt` deve ser "number".');

  const pos = this.player.position;
  const novoY = pos.y;
  const novoX = pos.x + qnt;

  if (novoX >= this.mapa.mapa[0].length || this.mapa.mapa[novoY][novoX] === "#") {
    console.warn("🚫 Movimento bloqueado por parede ou limite do mapa.");
    return;
  }
  this.player.moverPara(novoX, novoY);

  console.log(`Moveu ${qnt} bloco(s) para direita!`);
}

function moverEsquerda(qnt, mapa) {
  if (typeof qnt === 'undefined') throw new Error('O parâmetro `qnt` é obrigatório.');
  if (typeof qnt !== 'number') throw new Error('O tipo do parâmetro `qnt` deve ser "number".');

  const pos = this.player.position;
  const novoY = pos.y;
  const novoX = pos.x - qnt;

  if (novoX < 0 || this.mapa.mapa[novoY][novoX] === "#") {
    console.warn("🚫 Movimento bloqueado por parede ou limite do mapa.");
    return;
  }
  this.player.moverPara(novoX, novoY);

  console.log(`Moveu ${qnt} bloco(s) para esquerda!`);
}

export { moverCima, moverBaixo, moverDireita, moverEsquerda };
