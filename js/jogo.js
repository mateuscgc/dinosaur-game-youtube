// Tudo dentro deste script será criado durante a aula.
var personagem;
var obstaculo;

function jogo() {
	//preparar o jogo.
	personagem = criarPersonagem();
	obstaculo = criarObstaculo();
	adicionarMovimentoParaEsquerda(obstaculo);
}

function executaAcao(e) {
	console.log(e);

	switch(e.code) {
		case 'Space':
		case 'ArrowUp':
			pular();
			break;
	}
}
