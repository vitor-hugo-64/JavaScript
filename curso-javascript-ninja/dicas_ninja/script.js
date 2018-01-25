( function () {
	'use strict';

	var arr = [ 1, 2, 3, 4, 5];

	// COPIA UM ARRAY
	var arr2 = arr.map( function (item) {
		return item;
	});

	// TAMBÉM PODE SER FEITO
	var arr3 = arr.slice();

	console.log(arr);
	console.log(arr2);

	var $divs = document.querySelectorAll('div');

	// fazer copia da divs
	var $divsCopy = Array.prototype.slice.call($divs);

	console.log($divs, $divsCopy, $divs === $divsCopy);

	function myFun(argument) {
		
	}

	// saber o tipo de dado
	// É o jeito mais aconselhavel a se usar
	console.log( Object.prototype.toString.call(myFun) );

	// também pode ser verificado através da string que retorna
	function isFunction( element ) {
		return Object.prototype.toString.call(element) === '[Object Function]';
	}

	var fun = function () {};

	console.log(isFunction(fun));


} )( window, document);