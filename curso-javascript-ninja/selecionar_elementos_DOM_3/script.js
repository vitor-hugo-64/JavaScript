(function (win, doc) {
    'use_strict';

    var $inputUserName = doc.querySelector('#username');
    var $inputPassword = doc.querySelector('#password');
    var $inputEnviar = doc.querySelector('#enviar');
    console.log($inputUserName.value, $inputPassword.value);

    $inputEnviar.addEventListener("click", function (event) {
        event.preventDefault();
        console.log('Botão Clickado!');
    }, false);

    $inputUserName.addEventListener('click', function () {
        console.log("Espaço Para Colocar O Nome Foi Clicado!");
    },false);

    /*
        value - Pega o valor de um campo input
        value('conteudo') - insere o conteudo em determinado campo

        event - objeto relacionado as eventos do botao, ele pode conter diversas informações a respeito do botão e também pode receber qualquer nome e não só 'event'
        event.preventDefault() - Ele para o comportamento padrão daquele botão, nesse caso se tratando de um botão de um formulario ele não ira deixar o botao enviar os dados

        addEventListener - Adiciona Um Evento Em Um Determinado Elemento
    */
    
})(window, document);