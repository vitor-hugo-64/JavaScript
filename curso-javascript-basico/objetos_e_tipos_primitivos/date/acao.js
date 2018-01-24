
  // O JAVASCRIPT UTILIZA A DATA DO MEU SISTEMA, ENTÃO SE HOUVER ALTERAÇÕES NA
  // DATA DO COMPUTADOR ISSO IRÁ REFLETIR NO CÓDIGO

  // PEGA A DATA AUTOMÁTICA
  var data = new Date();
  document.write(data);
  document.write('<br>');

  // PEGA A DATA PARTIR DA STRING INFORMADA
  var data1 = new Date('july/25/2017 11:03:11');
  document.write(data1);
  document.write('<br>');

  // PEGA A DATA NESSE FORMATO
  // var data2 = new Date( ano, mes, dia, horas, minutos, segundos, milisegundos);
  // ANO E MES SÃO OBRIGATÓRIOS
  var data2 = new Date(2017, 7);
  document.write(data2);
  document.write('<br>');

  // PEGANDO HORA LOCAL
  // PEGANDO HORA UNIVERSAL
  var hora = new Date();
  document.write(hora.getHours());
  document.write(' ');
  document.write(hora.getUTCHours());

  // PEGANDO O DIA DO MES
  document.write(' ');
  document.write(hora.getDate());

  // PEGANDO O DIA DA SEMANA
  // começando em '0'
  document.write(' ');
  document.write(hora.getDay());

  // OUTRA FORMA DE USAR ESSE METODO
  // NESSE CASO ELE IRÁ PEGAR A DATA DE ACORDO COM O OBJETO DATE E DEPOIS IRÁ
  // IRÁ ATRIBUIR ESSE VALOR NUMERICO AO INDICE DO ARRAY QUE POR CONSEQUENCIA
  // IRÁ PRINTAR NA TELA O DIA CORREPONDENTE
  document.write(' ');
  var diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
  document.write(diasDaSemana[hora.getDay()]);
  document.write('<br>');

  // PEGANDO O ANO COM QUATRO DIGITOS
  document.write(hora.getFullYear());
