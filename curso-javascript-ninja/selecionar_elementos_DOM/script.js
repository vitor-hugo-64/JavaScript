(function (win, doc) {
    'use strict';
    
    // sempre que um if tem uma unica linha não pe necessário usar chaves
    if (win !== window)
        console.log('yes');

    console.log("Essa Linha Sempre Será Mostrada");

    // MÉTODOS DO WINDOW
    win.alert('Hello');

    //pergunta feita na tela
    win.prompt("Mensagem?");

    // pode ser armazenado o valor de prompt em uma variavel
    var nome = prompt('Qual É O Seu Nome?');

    if(nome)
        console.log(nome);
    else
        console.log('Não respondeu');

    //confirm - serve para confirmar uma ação
    var del = confirm('Deseja realmente excluir?');

    if (del) {
        console.log('Confirmado');
    }else{
        console.log('Não Confirmado');
    }

    // pega um elemento por um ID
    console.log( doc.getElementById('my') );

    // pega um elemento por uma classe
    console.log( doc.getElementsByClassName('my-link') );

    // pega um elemento pela tag
    console.log( doc.getElementsByTagName('h1') );

})(window, document);