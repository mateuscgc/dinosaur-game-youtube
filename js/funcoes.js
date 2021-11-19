function pular(elemento){
    if(elemento.classList != 'animar'){
        elemento.classList.add('animar')
    }

    setTimeout(function(){
        elemento.classList.remove('animar')
    }, 500)
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
        }
    }
}

function gameOver(elemento1, elemento2) {
    // elemento2.style.animation = 'none';
    // elemento2.style.display = 'none';
    alert('Você perdeu!');
}

function criarPersonagem() {
    var novoPersonagem = document.createElement('div');
    novoPersonagem.setAttribute("id", "personagem");
    return novoPersonagem;
}

function criarObstaculo() {
    var novoObstaculo = document.createElement('div');
    novoObstaculo.setAttribute("id", "obstaculo");
    return novoObstaculo;
}

function adicionarElementoAoJogo(jogo, elemento) {
  jogo.appendChild(elemento);
}

function adicionarMovimentoParaEsquerda(elemento) {
    elemento.classList.add('movimento_esquerda')
}


