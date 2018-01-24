(function(params) {
    
    // isso é um exemplo de expressão regular
    / m /

    var regex = / m /;

    var texto = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at lacus sit amet elit dignissim posuere id nec mauris. Fusce accumsan auctor tellus, eu facilisis tortor dictum ac. Sed imperdiet mauris nisi, sed efficitur dolor tincidunt quis. Vivamus efficitur finibus odio lacinia sodales. Nam pulvinar, felis sed bibendum elementum, nunc nibh elementum ipsum, vel eleifend lectus neque et mi. Vivamus ullamcorper lectus tortor, non blandit neque fermentum non. Vivamus pulvinar, sem vitae scelerisque consectetur, metus leo accumsan arcu, ac dictum orci nisl quis arcu. Ut nec nisi ut libero sodales cursus. Nullam in augue massa. Nunc ac massa scelerisque, rutrum nunc id, rutrum dui. Aenean tincidunt nulla a laoreet porta. Ut eu massa a orci dictum volutpat eu pellentesque ipsum. Nulla eu mauris felis. Morbi consectetur felis nulla, eget commodo risus ullamcorper quis.';

    // DESSA FORMA SE PEGA TODOS OS REGISTROS DA LETRA PROCURADA EM UM ARRAY
    // NESSE CASO ELE ESTÁ PROCURANDO A LETRA 'm' E ELE QUER TODOS OS REGISTROS DO TEXTO
    console.log(texto.match(/m/g));

    // QUANDO SE USA O '\w' ELE RETORNA TODOS OS CARACTERES DO TEXTO EM UM ARRAY
    console.log(texto.match(/\w/g));

    // DESSA FORMA SE VERIFICA SE UMA STRING ESTÀ NP TEXTO
    console.log(texto.match(/Vitor Hugo/g));

    // DESSA FORMA SE PROCURA NUMEROS
    console.log(texto.match(/\d/g));

    // DESSA FORMA SE PROCURA TODOS OS CONJUNTOS DE NUMEROS
    console.log(texto.match(/\d\d/g));

    // DESSA FORMA SE PROCURA DIVERSOS CONJUNTOS DE CARACTERES
    console.log(texto.match(/da|de/g));

    //AGRUPAMENTO DE CARACTERES
    console.log(texto.match(/lorem|1254/g));

    // PROCURA TODOS OS CARACTERES INFORMADOS
    console.log(texto.match(/[123456789]/g));

    // PROCURA LETRAS DE 'A' A 'Z'
    console.log(texto.match(/a-z/g));

    // substitui caracteres por ou outros
    console.log(texto.replace(/Lorem/g, 'VITOR'));	

    // dessa forma voce consegue passar os parametros pegados no regex em uma função
    // Nesse caso primeiro ele irá retornar a junção dos caracteres e depois cada caracter em especifico
    console.log(texto.match(/(e)(u)/g), function(){
    	return arguments;
    })

    // outro exemplo
    console.log('vitor hugo'.replace(/(\w)(\w)/g, function (capturaTotal, letra1, letra2) {
    	return letra1.toUpperCase() + letra2.toLowerCase();
    }));

    // CONSTRUTOR DE EXPRESSÃO REGULAR //

    var regex = new RegExp( 'Vitor Hugo' );

    console.log(regex);

    
    



})();