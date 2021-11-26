// Tudo dentro deste script será criado durante a aula.

// Função inicial para preparar o jogo.
function jogo() {
	// Preparar o jogo.
	jogo = document.getElementById("game");
	personagem = criarPersonagem();
	adicionarElementoAoJogo(jogo, personagem);

	zezinAsteroide = criarObstaculo(34);
	adicionarElementoAoJogo(jogo, zezinAsteroide);
	adicionarMovimentoParaEsquerda(zezinAsteroide);

	setInterval(function(){
		testarColisao(personagem, zezinAsteroide)}, 20)

}

// Chama função para iniciar o jogo.
jogo();
