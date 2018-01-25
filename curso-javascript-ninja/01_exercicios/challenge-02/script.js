((function ( w, d) {
	'use strict';

	// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.
	function add( a, b) {
		return a + b;
	}

	// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.
	var result = add( 1, 2) + 5;

	// Qual o valor atualizado dessa variável?
	console.log(result);

	// Declare uma nova variável, sem valor.
	var newVar;

	/*
		Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    	O valor da variável agora é VALOR.
		Onde VALOR é o novo valor da variável.
	*/
	function addNewVar() {
		newVar = 15;
		return 'O Valor Da Variável Agora É ' + newVar;
	}

	// Invoque a função criada acima.
	console.log(addNewVar());

	// Qual o retorno da função? (Use comentários de bloco).
	/*
		Retorna a string 'O Valor Da Variável Agora É ' + newVar'
	*/

	/*
		Crie uma função com as seguintes características:
		1. A função deve receber 3 argumentos;
		2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    		Preencha todos os valores corretamente!
		3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
	*/
	function multiplication( a, b, c) {
		if (a == null || b == null || c == null) {
			return 'Preencha todos os valores corretamente!';
		} else {
			return (a * b * c) + 2;
		}
	}

	// Invoque a função criada acima, passando só dois números como argumento.
	console.log(multiplication( 2, 3));

	// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
	// O Retorno foi 'Preencha todos os valores corretamente!';

	// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
	console.log(multiplication( 2, 2, 2));

	// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
	// Agora o resultado é a resposta

	/*
		Crie uma função com as seguintes características:
		1. A função deve receber 3 argumentos.
		2. Se somente um argumento for passado, retorne o valor do argumento.
		3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
		4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
		5. Se nenhum argumento for passado, retorne o valor booleano `false`.
		6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
	*/
	function operations( a, b, c) {

		if (a == undefined && b == undefined && c == undefined) {
			return false;
		} else if (a !== undefined && b == undefined && c == undefined) {
			return a;
		} else if(a !== undefined && b !== undefined && c == undefined) {
			return a + b;
		} else if (a !== undefined && b !== undefined && c !== undefined) {
			return (a + b) / c;
		} else {
			return null;
		}
	}

	// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
	console.log(operations( 9, 2, 3, 4, 5));

})( window, document));