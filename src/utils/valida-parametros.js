const VALIDACOES = {
    'OBRIGATORIO': (parametro, nomeParametro) => {
        if (typeof parametro === 'undefined' || parametro === null)
            throw new Error(`O parâmetro "${nomeParametro}" é obrigatório.`);
    },
    'TIPO': (parametro, nomeParametro, tipo) => {
        if (parametro) {
            if (typeof parametro !== tipo)
                throw new Error(`O tipo do parâmetro "${nomeParametro}" deve ser "${tipo}".`);
        }
    }
}

function validar(parametro, nomeParametro, validacoes) {
    validacoes.forEach(v => {
        if (typeof v === 'object') {
            VALIDACOES[v.validacao](parametro, nomeParametro, ...v.args)
        } else {
            VALIDACOES[v](parametro, nomeParametro)
        }
    });
}

export default validar;
