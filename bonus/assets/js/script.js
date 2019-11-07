$(document).ready(function(){

  // Generate a random number between min and max
  function randomNumber(min,max){
    var number = Math.floor(Math.random()*max)+min;
    return number;
  }

  // Generate x number random
  function xRandomNumber(size,max){

  var prohibitedNumbers = [];

  while(prohibitedNumbers.length < size){
      var random = randomNumber(0,max);
      var flag = true;
      for(i=0; i<=prohibitedNumbers.length; i++){
        if(prohibitedNumbers[i]==random){
        flag = false;
        } 
      }
      if(flag === true){
        prohibitedNumbers.push(random);
      }
    }
    return prohibitedNumbers;
  }

  //Variabili
  $riga = '<div class="row"></div>';
  $colonna = '<div class="col"></div>';
  var randomRed = xRandomNumber(15,64);
  $q = $(".col");
  $redCol=0;
  $numRed = 1;
  $numGreen = 1;

  //Aggiungo 8 righe
  for($i=0; $i<8; $i++){
    $(".container-fluid").append($riga);
  }

  //Aggiungo 8 colonne 
  for($j=0; $j<8; $j++){
    $(".row:not(.punteggio)").append($colonna);
  }

  $(".col").each(function(){
    for($a=0; $a<randomRed.length; $a++){
      if($redCol==randomRed[$a]){
        $(this).addClass("rosso");
      }
    }
    $redCol++;
  });

  $(".col.rosso").click(function(){
    $(this).css({
      "background-color": "red"
    });
    $(this).addClass('nohover');
    $("#red").text($numRed);
    $numRed++;
  });

  $(".col:not(.rosso)").click(function(){
    $(this).css({
      "background-color": "green",
    });
    $(this).addClass('nohover');
    $("#green").text($numGreen);
    $numGreen++;
  });

});