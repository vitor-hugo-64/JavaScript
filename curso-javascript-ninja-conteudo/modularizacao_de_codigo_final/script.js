	// ISSO ESTÁ INACABADO MELHOR É OLHAR TODA A SEÇÃO 24 DO CURSO DE JAVASCRIPT NINJA


(function (win, doc) {
    'use_strict';
	
	// isso seleciona os elementos do html
	var $visor = doc.querySelector('[data-js="visor"]');
	var $buttonsNumbers = doc.querySelectorAll('[data-js="buttons-numbers"]');
	var $buttonOperations = doc.querySelectorAll('[data-js="button-operation"]');
	var $buttonEqual = doc.querySelector('[data-js="button-operation-equal"]');
	var $buttonCE = doc.querySelector('[data-js="button-operation-zero"]');

	// isso executa uma função de click sobre o botão que será clicado
	Array.prototype.forEach.call($buttonsNumbers, function (button) {
		button.addEventListener('click', handleClickNumber, false);
	});
	// isso também
	Array.prototype.forEach.call($buttonOperations, function (button) {
		button.addEventListener('click', handleClickOperation, false);
	});

	$buttonCE.addEventListener("click", handleClickCE, false);
	$buttonEqual.addEventListener("click", handleClickEqual, false);

	// essa é a função que sera chamada quando for clicado nos botoes de numero
	function handleClickNumber() {
		$visor.value += this.value;
	}

	// essa é a função que será chamada quando apertar o botao CE
	function handleClickCE() {
		$visor.value = this.value;
	}

	function handleClickOperation() {
		if (isLastItemAnOperation()) {
			$visor.value = $visor.value.slice(0, -1);
		}

		$visor.value += this.value;
	}

	function isLastItemAnOperation() {
		var operations = ['+', '-', 'x', '÷'];
		var lastItem = $visor.value.split('').pop();
		return operations.some(function (operator) {
			return operator === lastItem;
		});
	}

	function handleClickEqual() {
		removeLastItemIfIsAnOperator();
		var allValues = $visor.value.match(/\d+[+x÷-]?/g);
		var result = allValues.reduce(function(accumulated, actual){
			var  firstValue = accumulated.slice(0, -1);
			var operator = accumulated.split('').pop();
			return accumulated + actual;
		});

		
	}

	function removeLastItemIfIsAnOperator() {
		if (isLastItemAnOperation()) {
			$visor.value = $visor.value.slice(0, -1);
		}
	}

})(window, document);