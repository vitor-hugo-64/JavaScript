(function ( w, d) {
	'use strict';

	var $getRequest = d.querySelector('[data-js="getRequest"]');

	$getRequest.addEventListener( 'click', getRequest, false);

	function getRequest() {
		// O AJAX SERVE BASICAMENTE PRA REQUISITAR DADOS DA URL DO SITE OU DE OUTRA SEM TER A NECESSIDADE DE 
		// RECARREGAR A PÁGINA

		// CRIA UMA EXTENSÃO DO OBJETO AJAX
		var ajax = new XMLHttpRequest();

		// ABRE UMA REQUISIÇÃO INFORMANDO O PROTOCOLO E A URL
		// nesse caso ele está requisitando um arquivo que tem o nome de 'data.json'
		ajax.open( 'GET', 'data.json');

		// ENVIA OS DADOS SE PRECISAR E SE TIVER
		ajax.send( null);

		// O EVENTO 'readystatechange' SERVE PRA MANIPULAR OS DADOS QUE IRÃO RETORNAR COM A REQUISIÇÃO
		ajax.addEventListener('readystatechange', function  (){
			if (isRequestOk()) {

				alert('Tudo Ok!');

				// DEPOIS QUE A REQUISIÇÃO TERMINAR OS DADOS SÃO ARMAZENADOS EM UMA VARIÁVEL E CONVERTIDOS EM UM OBJETO
				var data = JSON.parse(ajax.responseText);
			
				alert(data.message);
			}
		}, false);

		function isRequestOk() {
			return ajax.readyState === 4 && ajax.status === 200;
		}

		// JSON.parse() - CONVERTE OS DADOS DO JSON EM UM OBJETO COM ATRIBUTOS

		// readyState - PROPRIEDADE QUE INFORMA O ESTADO ATUAL DA REQUISIÇÃO
		// status - PROPRIEDADE QUE RETORNA O STATUS DA VARIAVEL AJAX
		// responseText - RETORNA A REPOSTA DA REQUISIÇÃO EM FORMA DE TEXTO SE FOR EM FORMATO XML USA-SE responseXML
		// OBS: o estado '0' é quando não foi aberto conexão ainda
		//      o estado '1' é quando já foi aberto conexão
		//      o estado '2' é quando o headers da requisição ja chegaram
		//      o estado '3' é quando o corpo da requisição já chego
		//      o estado '4' é quando concluiu a requisição com sucesso

		// *** NO CASO DE USAR ARQUIVOS XML NÃO É NECESSÁRIO CONVERTER PARA OBJETO QUENEM O JSON NA LINHA 29 *** //
	}



})( window, document);