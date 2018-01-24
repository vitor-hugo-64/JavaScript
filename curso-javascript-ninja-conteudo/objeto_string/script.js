(function () {
    'use strict';

    var objeto = new String('Vitor Hugo');

    console.log(objeto);
    // RETORNA QUANTIDADE DE CARACTERES DA STRING
    console.log(objeto.length);
    // RETORNA A LETRA QUE SE ENCONTRA NO INDICE INFORMADO
    console.log(objeto.charAt(4));
    // TAMBÉM PODE SER USADO NOTAÇÃO DE ARRAY
    console.log(objeto[4]);
    // CONCATENA STRING MAS NÃO MODIFICA A STRING PRINCIPAL
    console.log(objeto.concat(' Balon de Oliveira'));
    // RETORNA A POSIÇÃO DA STRING INFORMADA
    console.log(objeto.indexOf('o'));
    // TAMBÉM PODE SER PASSADO UM SEGUNDO PARAMETRO QUE IRÁ DIZER A PARTIR DE QUAL POSIÇÃO DE SE PROCURAR
    console.log(objeto.indexOf('o', 5));
    // SUBSTITUI UMA STRING
    console.log(objeto.replace('o', 'u'));
    // PEGA O VALOR DA STRING A PARTIR DE UM INTERVALO DE INDICES INFORMADOS
    console.log(objeto.slice(3, 7));
    // QUEBRA A STRING E TRANSFORMA EM UM ARRAY A PARTIR DE UMA LETRA DA STRING INFORMADO
    console.log(objeto.split('o'));
    // FAZ O MESMO QUE O SLICE
    console.log(objeto.substring(2, 5));
    // DEIXA TUDO EM MINUCULO
    console.log(objeto.toLowerCase());
    // DEIXA TUDO EM MAÍSCULO
    console.log(objeto.toUpperCase());
    // DEIXA SOMENTE UMA PARTE EM MAIUSCULO
    console.log(objeto.charAt(0).toUpperCase() + objeto.slice(1));

})();