(( function ( w, d) {
	'use strict';

	/*
		Crie um array com 5 items (tipos variados).
	*/
	var a = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];

	/*
		Crie uma função chamada `addItem`, que irá adicionar itens no array criado.
		A função deverá retornar o array atualizado.
	*/
	function addItem(a, i) {
		i.forEach(function ( item, index) {
			a.push(item);
		});
		return a;
	}

	/*
		Adicione um novo array ao array criado no início do desafio, com ao menos 3
		itens de tipos diferentes, mostrando o resultado no console.
	*/
	var b = ['12', 13, false];
	console.log(addItem(a, b));

	/*
		Mostre no console o segundo elemento desse último array, criado acima, com a
		frase:
		"O segundo elemento do segundo array é [ELEMENTO]."
	*/
	console.log('O Segundo Elemento Do Array É ' + a[1]);

	/*
		Mostre no console quantos itens tem o primeiro array criado, com a frase:
		"O primeiro array tem [QUANTIDADE DE ITENS] itens."
	*/
	console.log('O Primeiro Array Tem ' + a.length + ' Elementos');

	/*
		Agora mostre no console quantos itens tem o segundo array criado, com a frase:
		"O segundo array tem [QUANTIDADE DE ITENS] itens."
	*/
	console.log('O Segundo Array Tem ' + b.length + ' Itens');

	/*
		Utilizando a estrutura de repetição `while`, mostre no console todos os números
		pares entre 10 e 20, inclusive esses 2.
	*/
	var c = 10;
	console.log('Numeros Pares Entre 10 E 20:');
	while(c <= 20) {
		if (c % 2 == 0 ) {
			console.log(c);
		}
		c++;
	}

	/*
		Na mesma ideia do exercício acima: mostre agora os números ímpares.
	*/
	var c = 10;
	console.log('Numeros Impares Entre 10 E 20:');
	while(c <= 20) {
		if (c % 2 == 1 ) {
			console.log(c);
		}
		c++;
	}

	/*
		Repita os mesmos exercícios feitos acima, mas agora usando o loop "for".
		Só vamos mudar o range:
		- No primeiro "for", mostre os números pares entre 100 e 120, inclusive eles;
		- No segundo "for", mostre os números ímpares entre 111 e 125, inclusive eles.
	*/
	console.log( 'Números Pares Entre 100 E 120:' );
	for (var i = 100; i <= 120; i++) {
		if (i % 2 == 0) {
			console.log(i);
		}
	}

	console.log( 'Números Impares Entre 100 E 120:' );
	for (var i = 100; i <= 120; i++) {
		if (i % 2 == 1) {
			console.log(i);
		}
	}
	


})( window, document));