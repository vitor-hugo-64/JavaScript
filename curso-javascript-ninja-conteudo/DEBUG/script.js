(function () {
	'use_strict';


	function soma() {
		return Array.prototype.reduce.call(arguments, function (acumulado, item) {
			return acumulado += item;
		});
	}

	console.log(soma(1,2,3,4,5,6));

})();