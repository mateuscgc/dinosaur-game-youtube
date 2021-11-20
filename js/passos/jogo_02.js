// Tudo dentro deste script será criado durante a aula.

// Função inicial para preparar o jogo.
function jogo() {
	// Preparar o jogo.
	jogo = document.getElementById("game");

	// - Preparar o personagem.
	personagem = criarPersonagem();
	adicionarElementoAoJogo(jogo, personagem);

	// - Preparar o obstaculo.
	obstaculo = criarObstaculo(20);
	adicionarElementoAoJogo(jogo, obstaculo);
}

// Chama função para iniciar o jogo.
jogo();
