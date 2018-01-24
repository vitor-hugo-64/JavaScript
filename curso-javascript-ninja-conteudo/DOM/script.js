(function ( w, d) {
	'use_strict';

	// SELECIONA A DIV
	var $div = d.querySelector('#son2');
	var $span = d.querySelector('#son-son1');
	var $section = d.querySelector('#son-son2');
	var $h1 = d.querySelector('#son1');
	var $header = d.querySelector('[data-js="header"]');
	var $box = d.querySelector('[data-js="box"]');
	var $artigo = d.querySelector('[data-js="artigo"]');


	var $div2 = d.querySelector('#div2');
	var $header2 = d.querySelector('#header2');
	var $footer2 = d.querySelector('#footer2');

	// MOSTRA QUEM É O PAI DA DIV
	console.log( $div.parentNode );

	// MOSTRA QUEM É O PAI DO SPAN
	console.log( $span.parentNode );

	// MOSTRA TODOS OS NÓS QUE SÃO FILHOS DO DIV
	console.log($div.childNodes);

	// MOSTRA O PRIMEIRO FILHO
	console.log($div.firstChild);

	// MOSTRA O ÚLTIMO FILHO
	console.log($div.lastChild);

	// MOSTRA O PRÓXIMO IRMÃO DO ELEMENTO
	console.log($h1.nextSibling);

	// PEGA O IRMÃO ANTERIOR
	console.log($span.previousSibling);

	// RETORNA O TIPO DE NÓ DE DETERMINADO ELEMENTO - RETORNA UM INTEIRO
	console.log($div.nodeType);

	// RETORNA O CONTEUDO TEXTUAL DE ELEMENTOS 'text' E 'comment'
	console.log($div.firstChild.nodeValue);

	// RETORNA O NOME DO ELEMENTO SELECIONADO
	console.log($div.nodeName);

	// NÃO FAZ PARTE DOS DA ESPECIFICAÇÕES PADRÃO DO JAVA SCRIPT, MAS PODE SER USADA TAMBÉM PARA LISTAR TODOS OS NÓS
	// PORÉM NÃO MOSTRA OS TEXTOS E ESPAÇOS EM BRANCO, SOMENTE ELEMENTOS HTML
	console.log($div.children);

	// MOSTRA PRIMEIRO ELEMENTO DISCONSIDERANDO TEXTOS E ESPAÇO EM BRANCO
	console.log($div.firstElementChild);

	// MOSTRA ultimo ELEMENTO DISCONSIDERANDO TEXTOS E ESPAÇO EM BRANCO
	console.log($div.lastElementChild);

	// MOSTRA o PRÓXIMO ELEMENTO IRMÃO DISCONSIDERANDO TEXTOS E ESPAÇO EM BRANCO
	console.log($div.nextElementSibling);

	// MOSTRA QUANTOS FILHOS DISCONSIDERANDO TEXTOS E ESPAÇO EM BRANCO
	console.log($div.childElementCount);


	// **** METODOS **** //

	// VERIFICA DE SE TEM DETERMINADO ATRIBUTO HTML
	// PARA VERIFICAR SE ELE POSSUI QUALQUER TIPO DE ATRIBUTO É SÓ NÃO PASSAR PARAMETRO NA FUNÇÃO
	console.log($div.hasAttributes('class'));


	// ADICIONA UM FILHO EM DETERMINADO ELEMENTO
	// nesse caso ele ira colocar o $header dentro $box
	console.log($box.appendChild($header));

	// INSERE ANTES
	// nesse caso ele ira ira inserir o $artigo dentro do $div e antes do $span
	$div.insertBefore($artigo, $span);

	// CLONAR NÓ
	// caso queira clonar o conteudo do elemento se coloca true, caso não queira se colocar false
	// e isso tudo é armazenado na variével cloneElement
	var $cloneElement = $header.cloneNode(true);

	// CLONE È ISERIDO DEPOIS DO PRIMEIRO ELEMENTO DE $box
	$box.insertBefore($cloneElement, $box.firstChild);

	// VERIFICA SE ELEMENTO TEM NÓ FILHO
	console.log($div.hasChildNodes());

	// REMOVE UM FILHO
	console.log($div.removeChild($section));

	// SUBSTITUI POR UM NOVO ELEMENTO
	// NESSE CASO ELE ESTÁ SUBSTITUINDO HEADER PELO FOOTER
	console.log($div2.replaceChild($footer2, $header2));

	// CRIA UM NOVO NÓ DE TEXTO
	var text = d.createTextNode('Opá');
	console.log(text);

	// CRIA UM ELEMENTO COM BASE NO NOME DE TAG
	var newP = d.createElement('p');
	newP.appendChild(text);

	// ***** PROPRIEDADES DO ELEMENTOS ***** //

	// podemos acessar dessa forma as propriedades de elementos html
	console.log($div.id);
	console.log($div.className);

	// esses atributos são getters e setters
	// então suas pripriedades são alteradas facilmente
	console.log($div.className = 'arroz');

	// para pegar qualquer tipo de atributo voce pode usar o metodo getAttribute()
	console.log($div.getAttribute('id'));
	console.log($div.getAttribute('class'));
	console.log($div.getAttribute('data-js'));

	// inserir atributo
	// 1 parametro é o nome do atributo
	// 2 parametro é o conteudo a ser inserido no atributo
	console.log($div.setAttribute('data-js', 'div-2'));
	console.log($div.getAttribute('data-js'));


})( window, document);