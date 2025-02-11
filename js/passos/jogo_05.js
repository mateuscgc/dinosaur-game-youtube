// Tudo dentro deste script será criado durante a aula.

// Função inicial para preparar o jogo.
function jogo() {
	// Preparar o jogo.
	jogo = document.getElementById("game");

	// - Preparar o personagem.
	personagem = criarPersonagem();
	adicionarElementoAoJogo(jogo, personagem);

	// -----MUDOU // Determina que quando uma tecla for pressioda, função executaAcao deve ser chamada.
	document.addEventListener("keydown", function(e){executaAcao(e, personagem)})

	// - Preparar o obstaculo.
	obstaculo = criarObstaculo(20);
	adicionarElementoAoJogo(jogo, obstaculo);
	adicionarMovimentoParaEsquerda(obstaculo);

	// Preparar teste de colisão entre o jogador e os obstáculos.
	setInterval(function () {
	    testarColisao(personagem, obstaculo);
	}, 10);
}

// -----MUDOU // Função executada quando qualquer tecla é pressionada.
function executaAcao(e, elemento) {
	switch(e.code) {
		case 'Space':
		case 'ArrowUp':
			pular(elemento);
			break;
	}
}

// Chama função para iniciar o jogo.
jogo();
