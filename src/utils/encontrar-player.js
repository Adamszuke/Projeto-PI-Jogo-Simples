function encontrarPlayer(mapa) {
  for (let y = 0; y < mapa.mapa.length; y++) {
    for (let x = 0; x < mapa.mapa[y].length; x++) {
      if (mapa.mapa[y][x] === "P") {
        return { x, y };
      }
    }
  }
  throw new Error("Jogador não encontrado no mapa.");
}

export default encontrarPlayer;