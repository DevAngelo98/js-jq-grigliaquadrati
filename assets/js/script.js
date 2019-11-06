$(document).ready(function(){

  $(".col.rosso").click(function(){

    $(this).css({
      "background-color": "red"
    });

  });

  $(".col:not(.rosso)").click(function(){

    $(this).css({
      "background-color": "green"
    });

  });




});