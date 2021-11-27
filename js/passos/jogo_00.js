// Tudo dentro deste script será criado durante a aula.

// Função inicial para preparar o jogo.
function jogo() {
	// Preparar o jogo.
	jogo = document.getElementById("game");
	personagem = criarPersonagem();
	adicionarElementoAoJogo(jogo, personagem);

	document.addEventListener("keydown", function(e){jump(e, personagem)})
	zezinAsteroide = criarObstaculo(34);
	adicionarElementoAoJogo(jogo, zezinAsteroide);
	adicionarMovimentoParaEsquerda(zezinAsteroide);

	pontuacaoMaxima = criarPontucaoMaxima();
	adicionarElementoAoJogo(jogo, pontuacaoMaxima);
	atualizarPontuacaoMaxima(pontuacaoMaxima);
	
	pontuacao = criarPontucao();
	adicionarElementoAoJogo(jogo, pontuacao);



	setInterval(function(){
		atualizarPontuacao(pontuacao);		
	}, 1000)

	setInterval(function(){
	mudarTamanhoDoObstaculo(zezinAsteroide, Math.floor(Math.random() * 41) + 20)
	}, 2000);

	setInterval(function(){
		testarColisao(personagem, zezinAsteroide, pontuacao)}, 20)

}
function jump(e, elemento){
	if(e.code == "Space"){
		pular(elemento)
	}
}


// Chama função para iniciar o jogo.
jogo();
