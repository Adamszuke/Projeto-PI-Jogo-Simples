import encontrarPlayer from "./utils/encontrar-player";
import validar from "./utils/valida-parametros";

function moverCima(qnt) {
  validar(qnt, 'quantidade', [
    'OBRIGATORIO',
    { validacao: 'TIPO', args: ['number'] },
  ])

  const pos = this.player.position;
  const novoY = pos.y - qnt;
  const novoX = pos.x;

  if (novoY < 0 || this.mapa.mapa[novoY][novoX] === "#") {
    throw new Error("Movimento bloqueado por parede ou limite do mapa.");
  }
  this.player.moverPara(novoX, novoY);

  return `Moveu ${qnt} bloco(s) para cima!`;
}

function moverBaixo(qnt) {
  validar(qnt, 'quantidade', [
    'OBRIGATORIO',
    { validacao: 'TIPO', args: ['number'] },
  ])

  const pos = this.player.position;
  const novoY = pos.y + qnt;
  const novoX = pos.x;

  if (novoY >= this.mapa.mapa.length || this.mapa.mapa[novoY][novoX] === "#") {
    throw new Error("Movimento bloqueado por parede ou limite do mapa.");
  }
  this.player.moverPara(novoX, novoY);

  return `Moveu ${qnt} bloco(s) para baixo!`;
}

function moverDireita(qnt) {
  validar(qnt, 'quantidade', [
    'OBRIGATORIO',
    { validacao: 'TIPO', args: ['number'] },
  ])

  const pos = this.player.position;
  const novoY = pos.y;
  const novoX = pos.x + qnt;

  if (novoX >= this.mapa.mapa[0].length || this.mapa.mapa[novoY][novoX] === "#") {
    throw new Error("Movimento bloqueado por parede ou limite do mapa.");
  }
  this.player.moverPara(novoX, novoY);

  return `Moveu ${qnt} bloco(s) para direita!`;
}

function moverEsquerda(qnt) {
  validar(qnt, 'quantidade', [
    'OBRIGATORIO',
    { validacao: 'TIPO', args: ['number'] },
  ])

  const pos = this.player.position;
  const novoY = pos.y;
  const novoX = pos.x - qnt;

  if (novoX < 0 || this.mapa.mapa[novoY][novoX] === "#") {
    throw new Error("Movimento bloqueado por parede ou limite do mapa.");
  }
  this.player.moverPara(novoX, novoY);

  return `Moveu ${qnt} bloco(s) para esquerda!`;
}

export { moverCima, moverBaixo, moverDireita, moverEsquerda };
