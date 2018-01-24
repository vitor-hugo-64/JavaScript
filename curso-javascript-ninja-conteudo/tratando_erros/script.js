( function () {
	'use strict';

	try {
		// SERVE PRA DISPARAR UM ERRO
		throw new Error('Message Error');
	} catch(e) {
		console.log('Ocorreu O Seguinte Erro: ' + e.message);
	}

})( window, document);