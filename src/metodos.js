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

function atacar(direcao) {
  validar(direcao, 'direcao', [
    'OBRIGATORIO',
    { validacao: 'TIPO', args: ['string'] },
  ])
  
  const { x, y } = this.player.position;
  let alvoX = x;
  let alvoY = y;
  switch (direcao.toLowerCase()) {
    case 'cima':
      alvoY = y - 1;
      break;
    case 'baixo':
      alvoY = y + 1;
      break;
    case 'esquerda':
      alvoX = x - 1;
      break;
    case 'direita':
      alvoX = x + 1;
      break;
    default:
      throw new Error(`Direção inválida: "${direcao}".`);
  }
  if (alvoY < 0 || alvoY >= this.mapa.mapa.length || alvoX < 0 || alvoX >= this.mapa.mapa[0].length) {
    return "Você errou o ataque!";
  }

  if (this.mapa.mapa[alvoY][alvoX] === this.inimigo.simbolo) {
    this.inimigo.remover();
    document.dispatchEvent(new Event('inimigoDerrotado'));
    return "Inimigo derrotado com sucesso!";
  } else {
    return "Você errou o ataque!";
  }
}

export { moverCima, moverBaixo, moverDireita, moverEsquerda, atacar };
