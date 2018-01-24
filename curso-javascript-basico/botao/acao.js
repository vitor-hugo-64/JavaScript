

  var botao = document.getElementById("botao");
  var estado = false;

  function carregarBotao(){
    if (estado == false) {
      botao.src="desligado.jpg";
    }
  }

  function usarBotao(){}

    if(estado == false){
      img.src="ligado.jpg";
      estado = true;
    }else if(estado == true){
      img.src="desligado.jpg";
      estado = false;
    }

  }
