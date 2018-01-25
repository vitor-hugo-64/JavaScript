(function (w, d) {
    'use_strinct';
    
    // isso seria uma execucao sincrona ou seja um atras do outro
    console.log(1);
    console.log(2);
    console.log(3);

    // isso seria assincrona
    $btn = d.querySelector("#btn");
    $btn.addEventListener('click', function (e) {
        console.log("Hello Word!");
    }, false);

    // serve para exeuctar uma função asincrona de acordo com o tempo que ira levar para começar
    console.log("inicio");
    setTimeout(function () {
        console.log("Executou O Set");
    }, 1000);
    console.log("fim");

    // setInterval - executa de tempos em tempos 
    /* setInterval(function () {
        console.log("Executou O Set");
    }, 100); */

    var counter = 0;
    
    function timer() {
        console.log('timer', counter++);
        if (counter > 10) 
            return;
        setTimeout(timer, 1000);
    }

    timer();

    // DESSA FORMA VOCE PODE ATRIBUIR UMa funcao PRA PARAR A CONTAGEM ATRAVES DE UM BOTAO
    var temporizador;
    var counter2 = 0;
    function timer2() {
        console.log('timer2', counter2++);
        temporizador = setTimeout(timer2, 1000);
    }

    timer2();

    var $btn2 = d.querySelector('[data-js="botao"]');
    $btn2.addEventListener('click',function () {
        clearTimeout(temporizador);
    });

    /*
        clearTimeout && clearInterval - Para o loop desses dois eventos
    */

})(window, document);