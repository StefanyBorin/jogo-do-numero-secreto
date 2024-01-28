
const gerarNumeroAleatorio = () => {
    return parseInt(Math.random() * 10 + 1);
};
let tentativas = 1;
let numeroAleatorio = gerarNumeroAleatorio();

const inserirTexto = (tag, texto) => {
    const campo = document.querySelector(tag);
    campo.innerHTML = texto;
    //responsiveVoice.speak(texto, "Brazilian Portuguese Female", { rete: 1.2 });
};

const mensagemInicial = () => {
    return (
        inserirTexto("h1", "Jogo do numero secreto"),
        inserirTexto("p", "escolha um numero de 1 a 10")
    );
};
mensagemInicial();

const palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;

const habilitarBotao = (estado) => {
    return document
        .getElementById("botao_chute")
        .setAttribute("disabled", estado);
};
const verificarChute = () => {
    const chute = document.querySelector("input").value;

    const mensagemErro =
        chute > numeroAleatorio
            ? `O numero secreto é menor que ${chute}`
            : `O numero secreto é maior que ${chute}`;

    if (chute > numeroAleatorio || chute < numeroAleatorio) {
        tentativas++;
        limparCampo();
        return (
            inserirTexto("p", mensagemErro),
            inserirTexto("h1", "Errou, tente novamente!")
        );
    }
    const mensagemAcerto = `Parabéns você conseguiu achar o número secreto com apenas ${tentativas} ${palavraTentativa}`;
    document.getElementById("reiniciar").removeAttribute("disabled");
    habilitarBotao(true);
    return inserirTexto("h1", "Acertou!"), inserirTexto("p", mensagemAcerto);
};

const limparCampo = () => {
    const campoChute = document.querySelector("input");
    campoChute.value = "";
};

const reiniciarJogo = () => {
    numeroAleatorio = gerarNumeroAleatorio();
    tentativas = 0;
    limparCampo();
    mensagemInicial();
    document.getElementById("reiniciar").setAttribute("disabled", true);
    document.getElementById("botao_chute").removeAttribute("disabled");
};
