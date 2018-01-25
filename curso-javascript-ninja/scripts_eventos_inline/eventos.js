(function(win, doc) {
	'use_strict';

	var $a = doc.querySelector('[data-js="link"');

	// EVENTO QUE ADICIONA UM CLICK NA DIV QUE ESTA ARMAZENADO UM <a></a> E UM <span></span>
	var $div = doc.querySelector('[data-js="div"]').addEventListener('click', function(event) {
		alert('Clicou Na Div');
	}, true); // ESSE TRUE SERVE PRA DEFINIR SE OS EVENTOS VAO OCORRER DE DENTRO PRA FORA OU DE FORA PRA FRENTE

	var $span = doc.querySelector('[data-js="span"]');

	$a.addEventListener('click', function(event) {
		event.preventDefault();
		alert('clicou No A');
	}, false);

	// ***** UMA MANEIRA DE ADICIONAR UM EVENTO DE FORMA MAIS SIMPLIFICADA USANDO UMA FUNÇÃO ***** //
	function on(element, event, callBack) {
		element.addEventListener(event, callBack, true);
	}

	var $a2 = doc.querySelector('[data-js="link2"');
	var $div2 = doc.querySelector('[data-js="div2"');
	var $span2 = doc.querySelector('[data-js="span2"');

	on($a2, 'click', function(event) {
		alert("Clicou No a2");
	});

	on($div2, 'click', function(event) {
		alert("Clicou No div2");
	});

	on($span2, 'click', function(event) {
		alert("Clicou No span2");
	});

	// OS EVENTOS PODEM SER ATRIBUIDOS MAIS DE UMA VEZ AO MESMO ELEMENTO COMO NO EXEPLO ABAIXO QUE ESTÁ ATRIBUINDO UM EVENTO EM UM ELEMENTO QUE JA REVEBEU OUTRO EVENTO ANTES
	on($div2, 'click', function(event) {
		alert('Clicou na Div2 Segunda Vez');
	});

	// *** REMOVENDO EVENTOS *** //
	// PARA REMOVER EVENTOS É NECESSÁRIO SE TER O NOME DO OBJETO QUE IRÁ SER REMOVIDO ENTÃO NÃO SE PODE REMOVER FUNÇÕES ANONIMAS( SEM NOME )
	// isso nã irá funcionar
	$div2.removeEventListener('click', function(event) {
		alert("Clicou No div2");
	}, false);

	// SOMENTE EM CASOS COMO ESSE //
	function alertar() {
		alert('Olá Mundo');
	}

	$div2.addEventListener( 'click', alertar, false);

	$div2.removeEventListener( 'click', alertar, false);

	// *quando se usar o 'this' dentro de uma função pra adicionar como por exemplo o 'on' ele é referente ao elemento na qual está sendo adicionado o evento


})(window, document);