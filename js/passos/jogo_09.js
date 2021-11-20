// Tudo dentro deste script será criado durante a aula.

// Função inicial para preparar o jogo.
function jogo() {
	// Preparar o jogo.
	jogo = document.getElementById("game");

	// - Preparar o personagem.
	personagem = criarPersonagem();
	adicionarElementoAoJogo(jogo, personagem);

	// Determina que quando uma tecla for pressioda, função executaAcao deve ser chamada.
	document.addEventListener("keydown", function(e){executaAcao(e, personagem)})
	document.addEventListener("keyup", function(e){terminaAcao(e, personagem)})

	// - Preparar o obstaculo.
	obstaculo = criarObstaculo(20);
	adicionarElementoAoJogo(jogo, obstaculo);
	adicionarMovimentoParaEsquerda(obstaculo);

	setInterval(function () {
	    mudarTamanhoDoObstaculo(obstaculo, Math.floor(Math.random() * 41) + 20);
	    mudarAlturaDoObstaculo(obstaculo, Math.floor(Math.random() * 2)*35);
	}, 1000);

	// Preparar teste de colisão entre o jogador e os obstáculos.
	setInterval(function () {
	    testarColisao(personagem, obstaculo, gameOver);
	}, 10);
}

// Função executada quando qualquer tecla é pressionada.
function executaAcao(e, elemento) {
	switch(e.code) {
		case 'Space':
		case 'ArrowUp':
			pular(elemento);
			break;
		case 'ArrowDown':
			abaixar(elemento);
			break;
	} 
}

// Função executada quando qualquer tecla é solta.
function terminaAcao(e, elemento) {
	switch(e.code) {
		case 'ArrowDown':
			levantar(elemento);
			break;
	}
}

// Chama função para iniciar o jogo.
jogo();
