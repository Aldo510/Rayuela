$(document).ready(function() {
  //funcion para hacer que el contador se disminuya de manera 
  //automatica
  //cada vez que le de clic al boton de update
  $("#start_btn").click(function() {
    //Llamara a la funcion counter
    //counter();
    var counter = 3;
    setInterval(function(){
      if (counter >= 0){
        $("#counter").css("display","inline");
        $("#counter").html(counter);
        console.log(counter);
        if (counter == 0) {
          $("#counter").html("A Jugar!!");
          changeTD("Player2");
          changeTD("Player1");
        };
        counter--;
      };
      
    }, 1000);

    //Llamara a la funcion changeTD
    // changeTD("Player2");
    // changeTD("Player1");
  });
});
  /*Ver por que falla este metodo 
  y hacer que cuando le de clic a un boton se 
  frene el avance
  y cambiar el color de los ultimos td's para que 
  sepa donde frenar*/
//Funcion para recorrer las td
var changeTD = function(player){
  //Guardar en una variable el que tenga la clase active
  var activePlayer = $("#"+ player + " > .active");//;  
  console.log(activePlayer);

  //Guardar en otra variable el siguiente de ese
  var nextPlayer = activePlayer.next();
  console.log(nextPlayer);

  //Guardar el indice actual de la td en la que este
  var actual_Index = activePlayer.attr("id");
  console.log(actual_Index);

  //si el indice en el que este es 100 termina el programa 
  if (actual_Index == "100"){
    console.log("Ya termino");
  //De lo contrario
  }else{
    //Añade la clase a el td activo
    activePlayer.removeClass("active");
    //Agrega la clase a el td siguiente
    nextPlayer.addClass("active");
    //Llama a la funcion setTimeout para que cada

    setTimeout(function(){
      changeTD(player)}, 5); 
  }
}
