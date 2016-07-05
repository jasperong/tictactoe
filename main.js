$(document).on('ready', function(){
// define variables

// if player clicks box, either x for turn odd or o for turn even
var turn = 0;
$('.box').on('click', function(){
  if (turn % 2 == 0 && $(this).text() == " ") {
    $(this).text("X");
} else if (turn % 2 != 0 && $(this).text() == " "){
    $(this).text("O");
} turn++;
  });

// if 3 boxes match x/o, player wins

// if no one matches 3, draw

});
