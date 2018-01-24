	
	// CRIAÇÃO DE UM NOVO OBJETO BOOLEAN
	var a = new Boolean(0);

	// null, NaN, 0, "" - TODOS ESSES VALORES QUANDO ATRIBUIDOS À UM BOOLEANO SÃO FALSOS
	// E TODO OS RESTANTE É VERDADEIRO

	document.write(a);


	var b = new Boolean("");
	document.write(b);

	var c = new Boolean(NaN);
	document.write(c);

	var d = new Boolean(null);
	document.write(d);

	var e = new Boolean("Boolean");
	document.write(e);

	// FUNÇÕES DO BOOLEAN

	// RETORNA EM FORMA DE STRING O VALOR DO BOOLEANO
	alert(e.toString());

	// RETORNA O VALOR PRIMITIVO DELE
	alert(b.valueOf());
	
