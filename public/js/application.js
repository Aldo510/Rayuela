$(document).ready(function() {
  //funcion para hacer que el contador se disminuya de manera 
  //automatica
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
          changeTD("Player2");
          //La funcion de arriba se detendra cuando se 
          //presione la p
          $(document).bind('keydown', stop);
          //llama a la funcion changeTD del jugador1
          changeTD("Player1");
          //la funcion de arriba se dentendra cuando el
          //jugador presione la q
          $(document).bind('keydown', stop);
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
    //Terminara el programa
    console.log("Ya termino" + player);
  //Si el indice es 100 o el player 2 presiono la p 
  }else if(tecla1 == 80 && player == "Player2" || actual_Index == "100" ) {
    //Terminara juego
    console.log("Ya termino" + player);
  }
  //Si no se cumplen las anteriores
  else{
    //Vuelve a llamar la funcion changeTD hazta que se cumpla
    //alguna condicion de arriba
    var a = setTimeout(function(){
      changeTD(player)}, 15); 
  }
  
}
