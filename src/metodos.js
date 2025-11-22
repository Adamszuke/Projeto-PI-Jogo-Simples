import encontrarPlayer from "./utils/encontrar-player";
import validar from "./utils/valida-parametros";

function moverCima(qnt, mapa) {
  validar(qnt, 'quantidade', [
    'OBRIGATORIO',
    { validacao: 'TIPO', args: ['number'] },
  ])

  const pos = encontrarPlayer(mapa);
  const novoY = pos.y - qnt;
  const novoX = pos.x;

  if (novoY < 0 || mapa.mapa[novoY][novoX] === "#") {
    throw new Error("Movimento bloqueado por parede ou limite do mapa.");
  }

  // Move o jogador com animação
  mapa.movePlayerTo(novoY, novoX);

  return `Moveu ${qnt} bloco(s) para cima!`;
}

function moverBaixo(qnt, mapa) {
  validar(qnt, 'quantidade', [
    'OBRIGATORIO',
    { validacao: 'TIPO', args: ['number'] },
  ])

  const pos = encontrarPlayer(mapa);
  const novoY = pos.y + qnt;
  const novoX = pos.x;

  if (novoY >= mapa.mapa.length || mapa.mapa[novoY][novoX] === "#") {
    throw new Error("Movimento bloqueado por parede ou limite do mapa.");
  }

  // Move o jogador com animação
  mapa.movePlayerTo(novoY, novoX);

  return `Moveu ${qnt} bloco(s) para baixo!`;
}

function moverDireita(qnt, mapa) {
  validar(qnt, 'quantidade', [
    'OBRIGATORIO',
    { validacao: 'TIPO', args: ['number'] },
  ])

  const pos = encontrarPlayer(mapa);
  const novoY = pos.y;
  const novoX = pos.x + qnt;

  if (novoX >= mapa.mapa[0].length || mapa.mapa[novoY][novoX] === "#") {
    throw new Error("Movimento bloqueado por parede ou limite do mapa.");
  }

  // Move o jogador com animação
  mapa.movePlayerTo(novoY, novoX);

  return `Moveu ${qnt} bloco(s) para direita!`;
}

function moverEsquerda(qnt, mapa) {
  validar(qnt, 'quantidade', [
    'OBRIGATORIO',
    { validacao: 'TIPO', args: ['number'] },
  ])

  const pos = encontrarPlayer(mapa);
  const novoY = pos.y;
  const novoX = pos.x - qnt;

  if (novoX < 0 || mapa.mapa[novoY][novoX] === "#") {
    throw new Error("Movimento bloqueado por parede ou limite do mapa.");
  }

  // Move o jogador com animação
  mapa.movePlayerTo(novoY, novoX);

  return `Moveu ${qnt} bloco(s) para esquerda!`;
}

export { moverCima, moverBaixo, moverDireita, moverEsquerda };
