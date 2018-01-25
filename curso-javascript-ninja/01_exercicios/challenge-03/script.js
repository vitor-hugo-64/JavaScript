((function () {
	'use strict';

	// Declarar uma variável qualquer, que receba um objeto vazio.
	var obj = new Object();

	/*
		Declarar uma variável `pessoa`, que receba suas informações pessoais.
		As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
		- `nome` - String
		- `sobrenome` - String
		- `sexo` - String
		- `idade` - Number
		- `altura` - Number
		- `peso` - Number
		- `andando` - Boolean - recebe "falso" por padrão
		- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
	*/
	var pessoa = {
		nome: 'Vitor Hugo',
		sobrenome: 'Balon de Oliveira',
		sexo: 'Masculino',
		idade: 19,
		altura: 1.78,
		peso: 65,
		andando: false,
		caminhouQuantosMetros: 0
	}

	/*
		Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
		alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
		for chamado.
	*/
	pessoa.fazerAniversario = function () {
		this.idade++;
	}

	/*
		Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
		características:
		- Esse método deve receber por parâmetro um valor que representará a quantidade
		de metros caminhados;
		- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
		valor dessa propriedade a quantidade passada por parâmetro;
		- Ele deverá modificar o valor da propriedade `andando` para o valor
		booleano que representa "verdadeiro";
	*/
	pessoa.andar = function (a) {
		this.caminhouQuantosMetros += a;
		this.andando = true;
	}

	/*
		Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
		da propriedade `andando` para o valor booleano que representa "falso".
	*/
	pessoa.parar = function () {
		this.andando = false;
	}

	/*
		Crie um método chamado `nomeCompleto`, que retorne a frase:
		- "Olá! Meu nome é [NOME] [SOBRENOME]!"
	*/
	pessoa.nomeCompleto = function () {
		return "Olá Meu Nome É " + this.nome + " " + this.sobrenome;
	}

	/*
		Crie um método chamado `mostrarIdade`, que retorne a frase:
		- "Olá, eu tenho [IDADE] anos!"
	*/
	pessoa.mostrarIdade = function () {
		return "Olá, eu tenho " + this.idade + " anos!";
	}

	/*
		Crie um método chamado `mostrarPeso`, que retorne a frase:
		- "Eu peso [PESO]Kg."
	*/
	pessoa.mostrarPeso = function () {
		return "Eu peso " + this.peso + "kg!";
	}

	/*
		Crie um método chamado `mostrarAltura` que retorne a frase:
		- "Minha altura é [ALTURA]m."
	*/
	pessoa.mostrarAltura = function () {
		return "Minha altura é " + this.altura + "m!";
	}

	/*
		Agora vamos brincar um pouco com o objeto criado:
		Qual o nome completo da pessoa? (Use a instrução para responder e comentários
		inline ao lado da instrução para mostrar qual foi a resposta retornada)
	*/
	console.log(pessoa.nomeCompleto());



})( window, document));