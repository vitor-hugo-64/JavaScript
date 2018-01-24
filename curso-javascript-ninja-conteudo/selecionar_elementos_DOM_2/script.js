(function (win, doc) {
    'use_strict';

    // variavies do DOM recebem '$' na frente
    // variaveis que recebem valores pelo 'getElement' nunca serão staticos mas sempre serão dinamicos
    var $inputs =  doc.getElementsByTagName('input');
    console.log($inputs.length);

    // outra forma de pegar os elementos mas de forma statica
    // esse pega somente o primeiro elemento
    $inputs = doc.querySelector('input');
    // esse pega todos os elementos desse tipo
    $inputs = doc.querySelectorAll('[type="text"]');

    console.log($inputs);

    var $input2 = doc.querySelectorAll(".h");
    console.log($input2);

    var $input3 = doc.querySelector("#botao");
    console.log($input3);

})(window, document);