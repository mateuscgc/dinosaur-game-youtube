function gameOver(personagem, pontuacaoHUD, pontuacaoMaximaHUD) {
    
    alert('Você perdeu!');

    levantar(personagem);

    var pontuacaoMaxima = parseInt(localStorage.getItem("pontuacaoMaxima"));
    var pontuacaoAtual = parseInt(pontuacaoHUD.innerText);
    if(pontuacaoMaxima < pontuacaoAtual){
        localStorage.setItem("pontuacaoMaxima", pontuacaoAtual);
    }
    atualizarPontuacaoMaxima(pontuacaoMaximaHUD)
    if (pontuacaoHUD != null) {
        pontuacaoHUD.innerText = '-1';
    }
}

function criarPersonagem() {
    var novoPersonagem = document.createElement('div');
    novoPersonagem.setAttribute("id", "personagem");
    return novoPersonagem;
}

function criarObstaculo(largura) {
    var novoObstaculo = document.createElement('div');
    novoObstaculo.setAttribute("id", "obstaculo");
    novoObstaculo.style.width=largura+'px';
    novoObstaculo.style.left=(500 - largura)+'px';
    return novoObstaculo;
}

function criarPontucao() {
    var novaPontuacao = document.createElement('div');
    novaPontuacao.innerText = '0';
    novaPontuacao.setAttribute("id", "id-pontuacao");
    return novaPontuacao;
}

function criarPontucaoMaxima() {
    var novaPontuacao = document.createElement('div');
    novaPontuacao.innerText = '0';
    novaPontuacao.setAttribute("id", "id-pontuacaoMaxima");
    return novaPontuacao;
}

function adicionarElementoAoJogo(jogo, elemento) {
  jogo.appendChild(elemento);
}

function adicionarMovimentoParaEsquerda(elemento) {
    elemento.classList.add('movimento_esquerda')
}

function pular(elemento){
    if(elemento.classList != 'pulando'){
        elemento.classList.add('pulando')
    }

    setTimeout(function(){
        elemento.classList.remove('pulando')
        if (elemento.classList.contains('agaixado')) {
            elemento.classList.add('abaixado');
        }
    }, 500)
}

function pulando(elemento) {
    return parseInt(getComputedStyle(elemento).top) < 150;
}

function abaixar(elemento){
    if (pulando(elemento)) {
        if(!elemento.classList.contains('agaixado')) {
            elemento.classList.add('agaixado')
        }
        return;
    }
    if(!elemento.classList.contains('abaixado')) {
        elemento.classList.add('abaixado')
    }
}

function levantar(elemento){
    if(elemento.classList.contains('abaixado')) {
        elemento.classList.remove('abaixado')
    }
    if(elemento.classList.contains('agaixado')) {
        elemento.classList.remove('agaixado')
    }
}


function testarColisao(elemento1, elemento2, funcaoDeGameOver) {

    l1 = elemento1.offsetLeft;
    r1 = elemento1.offsetLeft + elemento1.offsetWidth;
    t1 = elemento1.offsetTop;
    b1 = elemento1.offsetTop + elemento1.offsetHeight;

    l2 = elemento2.offsetLeft;
    r2 = elemento2.offsetLeft + elemento2.offsetWidth;
    t2 = elemento2.offsetTop;
    b2 = elemento2.offsetTop + elemento2.offsetHeight;

    if((l2 < r1 && l2 > l1) || (r2 < r1 && r2 > l1) || (l2 < l1 && r2 > r1)) {
        if((t2 < b1 && t2 > t1) || (b2 < b1 && b2 > t1) || (t2 < t1 && b2 > b1)) {
            funcaoDeGameOver(elemento1, elemento2);
            return true;
        }
    }
}

function mudarTamanhoDoObstaculo(obstaculo, novaLargura) {
    obstaculo.style.width = novaLargura+'px';
    obstaculo.style.left = (500 - novaLargura)+'px';
}

function mudarAlturaDoObstaculo(obstaculo, novaAltura) {
    obstaculo.style.top = (180 - novaAltura)+'px';
}

function atualizarPontuacao(pontuacao) {
    pontuacao.innerText = parseInt(pontuacao.innerText) + 1;
}

function atualizarPontuacaoMaxima(pontuacaoMaxima) {
    var cookie = localStorage.getItem("pontuacaoMaxima"); 
    if(parseInt(cookie) > 0){
        pontuacaoMaxima.innerText = parseInt(cookie);
    }else{
        pontuacaoMaxima.innerText = 0;
    }
}