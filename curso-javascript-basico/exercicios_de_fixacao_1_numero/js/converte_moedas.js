
	document.write("Converte Um Número Para String!");
	document.write('<br>');
	// DECLARA A VARIÁVEL
	var numero_pra_formatar = 9.9;
	// DEFINE O NUMERO DE CASAS DEPOIS DA VIRGULA
	var formatado = numero_pra_formatar.toFixed(2);
	// ACRESCENTA O 'R$ ' NA FRENTE DA VARIÁVEL E ISSO FAZ UM PROCESSO AUTOMÁTICO DE CONVERSÃO PRA STRING
	var string = "R$ "+formatado;
	// SUBSTITUI O PONTO POR UMA VÍRGULA
	var mudado = string.replace(".",",");
	// EXIBE O NUMERO NA TELA
	document.write(mudado);
	document.write('<br>');
	document.write('<br>');

	document.write("Converte Uma String Para Número!");
	document.write('<br>');
	// SUBSTITUI A VÍRGULA DA STRING PELO PONTO
	var reverso = mudado.replace(",",".");
	// SUBSTITUI O 'R$' DA STRING POR NADA
	var reverso2 = reverso.replace("R$ ","");
	// CONVERTE A STRING PRA NUMERO
	var number = parseFloat(reverso2);
	document.write(number);
	document.write('<br>');
	document.write('<br>');

	document.write("Conversão De String Em Uma Só Linha!");
	document.write('<br>');
	// DECLARA O NUMERO
	var numero_não_convertido = 55.2;
	// CONVERTE O NUMERO EM STRING
	var numero_convertido = "R$ "+numero_não_convertido.toFixed(2).replace(".",",");
	// EXIBE O NUMERO NA TELA
	document.write(numero_convertido);
	document.write('<br>');
	document.write('<br>');

	document.write("Conversão De Número Pra String Em Uma Só linha!");
	document.write('<br>');
	// FAZ A CONVERSÃO DE VOLTA PRA NÚMERO EM UMA SÓ LINHA
	var numero_convertido_contrario = parseFloat((numero_convertido.replace("R$ ","")).replace(",","."));
	// PRINTA NA TELA O NÚMERO
	document.write(numero_convertido_contrario);
