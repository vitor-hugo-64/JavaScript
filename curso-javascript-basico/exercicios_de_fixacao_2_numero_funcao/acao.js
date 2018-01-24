	
	var numero = 2.5;

	function converterString(numero) {
		var conversao = ("R$ "+numero.toFixed(2)).replace(".",",");
		return conversao;
	}

	alert(resultado = converterString(numero));