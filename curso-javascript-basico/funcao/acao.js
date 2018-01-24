	// FUNÇÃO SEM PARAMETRO
	function exibirMensagem() {
		alert("Mensagem Exibida!");
	}

	// FUNÇÃO COM PARAMETRO
	function exibirMensagem2(mensagem) {
		alert(mensagem);
	}

	// FUNÇÃO COM SOMA DE DOIS NÚMEROS
	function somar(num1, num2){
		alert(num1+num2);
	}

	// FUNÇÃO COM RETORNO
	function retornarSoma(num1, num2){
		var soma = num1+num2;
		return soma;
	}
	document.write(retornarSoma(1,2));
	document.write('<br>');

	// VARIÁVEL COM VALOR DE FUNÇÃO
	// Esse não pode ser chamado antes de ser declarado
	var somarTudo = function(num1, num2, num3){
		var somar = num1+num2+num3;
		return somar;
	}

	document.write(somarTudo(1,2,3));
	document.write('<br><br>');
