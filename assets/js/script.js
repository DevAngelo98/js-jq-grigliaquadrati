$(document).ready(function(){

  $(".col.rosso").click(function(){

    $(this).css({
      "background-color": "red"
    });
    $(this).addClass('nohover')

  });

  $(".col:not(.rosso)").click(function(){

    $(this).css({
      "background-color": "green",
    });
    $(this).addClass('nohover')
  });

});