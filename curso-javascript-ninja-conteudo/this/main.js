(function() {
	
	var pessoa = {
		nome: 'Vitor Hugo',
		idade: 19,
		casado: false,
		andar: function andar() {
			alert(this.nome+'Está Andando!');
		},
		init: function init() {
			return this;
		}
	};

	console.log(pessoa.nome);

	function myFunction() {
		return this;
	}

	console.log(myFunction());
	console.log(pessoa.init());

	// new - CRIA UMA NOVA INSTANCIA DE UM OBJETO
	var newObject = new Object();
	console.log(newObject);

	// CONSTRUTOR
	function MyConstructor() {
		this.prop1 = 'prop1';
		this.prop2 = 'prop2';
	}

	var constructor = new MyConstructor();
	MyConstructor();
	window.prop1;
	console.log(new MyConstructor());
	console.log(constructor.prop1);
})();