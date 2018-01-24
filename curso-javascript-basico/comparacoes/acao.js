	
	// COMPARAÇÕES SIMPLES
	var num1 = 5;
	var num2 = 7;
	console.log(num1 == num2);
	console.log(num1 != num2);
	console.log(num1 == "5");
	console.log("7" != num2);
	console.log(num1 === "5");
	console.log(num1 === 5);

	// BLOCOS CONDICIONAIS
	var idade = 19;
	var idade2 = 16;

	if(idade > 18){
		document.write("Pode Dirigir");
	}else{
		document.write("Não Pode Dirigir");
	}
	document.write('<br>');
	if (idade2 > 18) {
		document.write("Pode Dirigir!");
	}else{
		document.write("Não Pode Dirigir!");
	}
	document.write('<br>');
	// OPERADORES LÓGICOS
	temCarteira = false;

	if (idade > 18 && temCarteira) {
		document.write("Pode Dirigir!");
	}else{
		document.write("Não Pode Dirigir!");
	}

