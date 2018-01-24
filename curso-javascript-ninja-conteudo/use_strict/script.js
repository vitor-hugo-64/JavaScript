(function () {
    // SERVE PARA CORRIGIR O ERRO QUE ACONTECE QUANDO TU DECLARA UMA VARIAVEL SEM O VAR
    'use strict';
    
    var nome = 'Vitor Hugo';

    var obj = {
        prop1: {
            prop2: {
                prop3: {
                    prop31: 'prop31',
                    prop32: 'prop32',
                    prop33: 'prop33'
                }
            }
        }
    }

    console.log(obj.prop1.prop2.prop3);
    // NÃO É PÉRMITIDO USAR NO MODO 'USE STRICT'
    /*
    with( obj.prop1.prop2.prop3 ) {
        console.log(obj.prop1.prop2.prop3);
    }

    */


    function Person( name, lastName, age, casado ) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.casado = casado;
    }

    console.log(this);

    // COM O 'USE STRICT' É SEMPRE NECESSÁRIO INSTANCIAR UM OBJETO DE UM CONSTRUTOR
    // NESSE CASO O CONSTRUTOR É O 'Person'
    var pessoa;
    console.log(pessoa = new Person('Vitor', 'Balon', 19, false));

    console.log(pessoa.name, pessoa.lastName, pessoa.age, pessoa.casado);

    // SEM O 'USE STRICT' QUANDO O 'delete' NÃO PODE DELETAR ELE RETORNA FALSE
    // MAS COM O USO DO 'USE STRICT' ELE RETORNA UM ERRO FATAL QUANDO NÃO PODE DELETAR
    console.log(delete pessoa.casado);

    var myVar;
    // ISSO ELE NÃO CONSEGURIA DELETAR, POIS O DELETE NÃO DELETA OBJETOS OU VARIAVEIS MAS SOMENTE ATRIBUTOS
    // console.log(delete myVar);


    // O 'USE STRICT' NÃO DEIXA COLOCAR O NOME DOS ATRIBUTOS DE OBJETO COM O MESMO NOME E NEM O MESMO NOME DE VARIAVEIS EM FUNÇÃO
    /*
    var ex = {
        prop1: 'prop1',
        prop1: 'prop2',
        prop3: 'prop3'
    };
    */

})();