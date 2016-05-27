$(document).ready(function() {
  //cada vez que le de clic al boton de update
  $("#start_btn").click(function() {
    //contador que disminuira
    var counter = 3;
    //Funcion para hacer un intervalo cada vez que se cumplan 
    //las condiciones
    setInterval(function(){
      //si el contador es mayor a 0
      if (counter >= 0){
        //Mostrara el contador en pantalla
        $("#counter").css("display","inline"); //
        //Dentro del contenedor pondra el numero del contador
        $("#counter").html(counter);
        //Si el contador es 0
        if (counter == 0) {
          //Se mostrara en pantalla el mensaje de a jugar
          $("#counter").html("A Jugar!!");
          //Correra a la funcion changeTd del jugador2
          var j1 = changeTD("Player2");
          //La funcion de arriba se detendra cuando se 
          //presione la p
          $(document).bind('keydown', stop);
          //llama a la funcion changeTD del jugador1
          var j2 = changeTD("Player1"); 
          //la funcion de arriba se dentendra cuando el
          //jugador presione la q
          $(document).bind('keydown', stop);/*Esta funcion juntara dos funciones con el evento keydown cuando le den clic a la letra elegida en la funcion hara algo */
        };
        //Disminuir contador
        counter--;
      };
      //Tiempo en el que se realizara el juego
    }, 1000);
  });
});

//variables para saber que tecla presiono
var tecla1 = 0
var tecla2 = 0
//variables para saber indice de posicion
var player1 = 0
var player2 = 0
//Funcion para devolver el valor de la tecla que regrese
var stop = function(e){
  
    /*revisara si la tecla que presiono es la q*/
    if (e.keyCode == 81){
      //Si la tecla es p sobreescribe el valor de la tecla2 a 81      
      tecla2 = 81;
    }
    //revisara si la tecla que presiono es la p
    if(e.keyCode == 80){
      //Si se cumple cambia el valor de la tecla1 por 80
      tecla1 = 80;
    }
};

 
//Funcion para recorrer las td
var changeTD = function(player){
  //Guardar en una variable el que tenga la clase active
  var activePlayer = $("#"+ player + " > .active");//;  
  

  //Guardar en otra variable el siguiente de ese
  var nextPlayer = activePlayer.next();

  //Guardar el indice actual de la td en la que este
  var actual_Index = activePlayer.attr("id");

      //Añade la clase a el td activo
    activePlayer.removeClass("active");
    //Agrega la clase a el td siguiente
    nextPlayer.addClass("active");
    //Llama a la funcion setTimeout para que cada

  //si el indice en el que este es 100 o el player 1 presione la Q
  if (actual_Index == "100" || tecla2 == 81 && player == "Player1"){
    //cambiar el valor de player a su pocision
    player1 = actual_Index
    //llamar al metodo winner para saber quien gano
    winner(player, player1)
  //Si el indice es 100 o el player 2 presiono la p 
  }else if(tecla1 == 80 && player == "Player2" || actual_Index == "100" ) {
    //pasar a player2 el valor en el que presiono la tecla    
    player2 = actual_Index
    //llamar al metodo winner para saber quien gano
    winner(player, player2)
  }
  //Hacer que con el actual index que regrese cada uno 
  //mostrar en pantalla quien gano y si se pasan que perdieron
  //Si no se cumplen las anteriores
  else{
    //Vuelve a llamar la funcion changeTD hazta que se cumpla
    //alguna condicion de arriba
    var a = setTimeout(function(){
      changeTD(player)}, 5); 
  }
  
}

//variables para saber la posicion en la que cayo cada jugador
var position1 
var position2
//Funcion para saber quien gano
var winner = function (player, position) {
  //revisar que jugador se ingreso
  if(player == "Player1"){
    //pasar el valor de la posicion 
    position1 = position  ;
  }else if(player == "Player2"){
    //pasar el valor de la posicion en la que quedo
    position2 = position;
  };

  //Revisar si son iguales
  if (position1 == position2){
    //Si son iguales y diferente a 100
    if (position1 != 100 && position2 != 100) {
      //Mostrar en pantalla que empataron
      $("#win").html("Empate");
    }
  //Si el jugador 1 es mayor
  }else if(position1 > 88 || position2 > 88 ){
    //Si se paso y el 2 es menor
    if (position1 > 88 && position2 < 88){
      //mostrar que gano jugador 2
      $("#win").html("Gana Jugador 2");
    //Si el jugador 2 se paso y el 1 no
    }else if( position2 > 88 && position1 < 88){
      //Mostrar que gana el jugador 1
      $("#win").html("Gana Jugador1");
    //De lo contrario mostrar que los 2 perdieron
    }else{
      $("#win").html("Perdieron los 2");
    }
  //Si el jugador 1 es mayor que el 2
  }else if(position1 > position2){
    //Mostar que gana el jugador 1
    $("#win").html("Gana Jugador 1");
    //Si el 2 es mayor que el 1
  }else if(position2 > position1){
    //Mostrar que gano el 2
    $("#win").html("Gana Jugador 2");
  }
}
