let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas  = 1;

function exibirTetoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTetoNaTela('h1', 'Jogo do número secreto');
    exibirTetoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

exibirTetoNaTela('h1', 'Jogo do número secreto');
exibirTetoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTetoNaTela('h1', 'acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTetoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
         if (chute > numeroSecreto) {
            exibirTetoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTetoNaTela('p', 'O númmero secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}
function gerarNumeroAleatorio() {
     let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
     let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

     if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
     }
     if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
     } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);        
        return numeroEscolhido;
     }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

