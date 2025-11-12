const terminalHistorico = document.querySelector('#terminal-historico');
const terminalInputContainer = document.querySelector('.terminal-input-container');
const historico = [];

function atualizaHistorico(comando) {
    terminalHistorico.value += ">  " + comando + "\n";
    historico.push(comando);
    terminalInputContainer.style.top = `
        ${historico.length * 18 + terminalInputContainer.clientHeight  > window.innerHeight ?
            window.innerHeight - terminalInputContainer.clientHeight :
            historico.length * 18
        }px`;
}

export default atualizaHistorico;
