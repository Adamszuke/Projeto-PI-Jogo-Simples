class Interpretador {
  #regexComandos = /([a-zA-Z_]\w*)\s*\((.*?)\)/g;
  #regexStrings = `"[^"]*"|'[^']*'`;
  #regexNumbers = `-?\\d+(\\.\\d+)?`;
  #regexBooleanos = '\\b([Tt]rue|[Ff]alse)\\b';
  #regexParams = new RegExp(`${this.#regexStrings}|${this.#regexNumbers}|${this.#regexBooleanos}|[^,]+`, 'g');

  constructor(metodos) {
    this.metodos = new Map();
    for (const nomeMetodo in metodos) {
      this.metodos.set(nomeMetodo.toLowerCase(), metodos[nomeMetodo]);
    }
  }

  /**
   * Analisa e executa uma string de comandos.
   * @param {string} frase A string contendo um ou mais comandos.
   */
  executar(frase) {
    this.#regexComandos.lastIndex = 0;
    let match;
    while ((match = this.#regexComandos.exec(frase)) !== null) {
      const nomeMetodo = match[1].toLowerCase();
      const parametrosString = match[2].trim();

      if (this.metodos.has(nomeMetodo)) {
        const funcaoMetodo = this.metodos.get(nomeMetodo);
        const parametrosArray = this.#parseParametros(parametrosString);

        try {
          return funcaoMetodo(...parametrosArray);
        } catch (e) {
          return `Erro: ` + e.message
        }

      } else {
        return `Método '${match[1]}' não encontrado.`;
      }
    }
    return 'Comando não encontrado.';
  }

  /**
   * Converte a string de parâmetros em um array com tipos corrigidos.
   * @param {string} stringParams A string de parâmetros.
   * @returns {Array<any>} Um array de parâmetros com tipos convertidos.
   * @private
   */
  #parseParametros(stringParams) {
    if (!stringParams || stringParams.trim() === '') {
      return [];
    }

    const arrayStringParams = stringParams.match(this.#regexParams)

    const arrayParams = arrayStringParams.map((param) => {
      param = param.trim();
      if ((param.startsWith('"') && param.endsWith('"')) ||
        (param.startsWith("'") && param.endsWith("'"))) {
        return param.slice(1, -1);
      }
      if (!isNaN(parseFloat(param))) {
        return parseFloat(param);
      }
      if (param === 'true' || param === 'True') return true;
      if (param === 'false' || param === 'False') return false;

      return param;
    });

    return arrayParams;
  }
}

export default Interpretador;