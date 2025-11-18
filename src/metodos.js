import encontrarPlayer from "./utils/encontrar-player";

function moverCima(qnt, mapa) {
  if (typeof qnt === 'undefined') throw new Error('O parâmetro `qnt` é obrigatório.');
  if (typeof qnt !== 'number') throw new Error('O tipo do parâmetro `qnt` deve ser "number".');

  const pos = encontrarPlayer(mapa);
  const novoY = pos.y - qnt;
  const novoX = pos.x;

  if (novoY < 0 || mapa.mapa[novoY][novoX] === "#") {
    console.warn("🚫 Movimento bloqueado por parede ou limite do mapa.");
    return;
  }

  // Move o jogador com animação
  mapa.movePlayerTo(novoY, novoX);

  console.log(`Moveu ${qnt} bloco(s) para cima!`);
}

function moverBaixo(qnt, mapa) {
  if (typeof qnt === 'undefined') throw new Error('O parâmetro `qnt` é obrigatório.');
  if (typeof qnt !== 'number') throw new Error('O tipo do parâmetro `qnt` deve ser "number".');

  const pos = encontrarPlayer(mapa);
  const novoY = pos.y + qnt;
  const novoX = pos.x;

  if (novoY >= mapa.mapa.length || mapa.mapa[novoY][novoX] === "#") {
    console.warn("🚫 Movimento bloqueado por parede ou limite do mapa.");
    return;
  }

  // Move o jogador com animação
  mapa.movePlayerTo(novoY, novoX);

  console.log(`Moveu ${qnt} bloco(s) para baixo!`);
}

function moverDireita(qnt, mapa) {
  if (typeof qnt === 'undefined') throw new Error('O parâmetro `qnt` é obrigatório.');
  if (typeof qnt !== 'number') throw new Error('O tipo do parâmetro `qnt` deve ser "number".');

  const pos = encontrarPlayer(mapa);
  const novoY = pos.y;
  const novoX = pos.x + qnt;

  if (novoX >= mapa.mapa[0].length || mapa.mapa[novoY][novoX] === "#") {
    console.warn("🚫 Movimento bloqueado por parede ou limite do mapa.");
    return;
  }

  // Move o jogador com animação
  mapa.movePlayerTo(novoY, novoX);

  console.log(`Moveu ${qnt} bloco(s) para direita!`);
}

function moverEsquerda(qnt, mapa) {
  if (typeof qnt === 'undefined') throw new Error('O parâmetro `qnt` é obrigatório.');
  if (typeof qnt !== 'number') throw new Error('O tipo do parâmetro `qnt` deve ser "number".');

  const pos = encontrarPlayer(mapa);
  const novoY = pos.y;
  const novoX = pos.x - qnt;

  if (novoX < 0 || mapa.mapa[novoY][novoX] === "#") {
    console.warn("🚫 Movimento bloqueado por parede ou limite do mapa.");
    return;
  }

  // Move o jogador com animação
  mapa.movePlayerTo(novoY, novoX);

  console.log(`Moveu ${qnt} bloco(s) para esquerda!`);
}

export { moverCima, moverBaixo, moverDireita, moverEsquerda };
