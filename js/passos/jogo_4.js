// Tudo dentro deste script será criado durante a aula.

// Função inicial para preparar o jogo.
function jogo() {
	// Preparar o jogo.
	jogo = document.getElementById("game");

	// - Preparar o personagem.
	personagem = criarPersonagem();
	adicionarElementoAoJogo(jogo, personagem);

	// - Preparar o obstaculo.
	obstaculo = criarObstaculo();
	adicionarElementoAoJogo(jogo, obstaculo);
	adicionarMovimentoParaEsquerda(obstaculo);

	// Preparar teste de colisão entre o jogador e os obstáculos.
	setInterval(function () {
	    testarColisao(personagem, obstaculo, gameOver);
	}, 10);
}

// Chama função para iniciar o jogo.
jogo();
