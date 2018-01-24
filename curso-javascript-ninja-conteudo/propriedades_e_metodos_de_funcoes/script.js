(function (w, d) {
	
	/*
	function myFunction(a, b, c) {
		return this.lastName;
	}

	// RETORNA A QUANTIDADE DE PARAMETROS QUE A FUNÇÃO PODE RECEBER
	console.log(myFunction.length);

	// RETORNA A FUNÇÃO EM FORMA LITERAL
	console.log(myFunction.toString());

	// INVOCA A FUNÇÃO
	console.log(myFunction.call());

	// .call - pode receber um parametro que é um objeto e isso é um diferencial na hora de invocar a função

	// exemplo: 

	function mostrarName() {
		console.log(this.name);
	}

	var obj = {
		name: "Vitor Hugo"
	}

	mostrarName.call(obj);


	// TAMBEM PODE SER PASSADO ARGUMENTOS
	function thisParametros(a, b, c, d) {
		console.log(this.name, a, b, c, d);
	}

	thisParametros.call(null, 1, 2, 3, 4);

	// aply é semelhante mas ele aceita array que é quebrado em parametros
	var arr = [1, 2, 3, 4];

	thisParametros.apply(null, arr);

	// PROTOTYPE
	// SERVE BASICAMENTE PARA PEGAR O MOLDE DE UMA FUNÇÃO

	function function2( name, lastName) {
		this.name = name;
		this.lastName = lastName;
		this.age = 30; //metodos padrao como esse não podem ser subscritos mesmo com o prototype
	}

	function2.prototype.fullName = function () {
		return this.name + " " + this.lastName;
	}

	var pessoa = new function2('vitor', 'hugo');

	console.log(pessoa.fullName());

	*/

	// USAR ARRAY LIKE COMO SE FOSSE ARRAY

	var arr = [ 1, 2, 3, 4];

	function show() {
		var a = (arguments);
		return a;
	}

	arr.forEach(function(item){
		console.log(item);
	})

	console.log(arr);

	console.log(show(1,2,3,4,5));

	// DESSA FORMA VOCE PODE USAR O PROTOTYPE PARA PEGAR AS PROPRIEDADES DE UM ARRAY NESSE CASO O FOR EACH E USADO COM O ARGUMENTS QUE NÃO É UM ARRAY MAS PODE SER USADO PORQUE O CALL DEFINE O THIS
	function myFunction() {
		Array.prototype.forEach.call(arguments,function (item) {
			console.log(item)
		});
	}

	myFunction(1 , 2, 3, 4);



})(window, document);