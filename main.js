$(document).on('ready', function(){
  // define variables
  var sqr1 = $('#sqr1');
  var sqr2 = $('#sqr2');
  var sqr3 = $('#sqr3');
  var sqr4 = $('#sqr4');
  var sqr5 = $('#sqr5');
  var sqr6 = $('#sqr6');
  var sqr7 = $('#sqr7');
  var sqr8 = $('#sqr8');
  var sqr9 = $('#sqr9');

  // if player clicks box, either x for turn odd or o for turn even
  var turn = 0;
  $('.box').on('click', function(){
    if (turn % 2 == 0 && $(this).text() == " ") {
      $(this).text("X");
    } else if (turn % 2 != 0 && $(this).text() == " "){
      $(this).text("O");
    } turn++;
      checkWin();
  });

  // if 3 boxes match x/o, player wins
  function checkWin() {
    if (sqr1.text() == "X" && sqr2.text() == "X" && sqr3.text() == "X") {
      winMessage('x');
    } else if (sqr4.text() == "X" && sqr5.text() == "X" && sqr6.text() == "X") {
      winMessage('x');
    } else if (sqr7.text() == "X" && sqr8.text() == "X" && sqr9.text() == "X") {
      winMessage('x');
    } else if (sqr1.text() == "X" && sqr4.text() == "X" && sqr7.text() == "X") {
      winMessage('x');
    } else if (sqr2.text() == "X" && sqr5.text() == "X" && sqr8.text() == "X") {
      winMessage('x');
    } else if (sqr3.text() == "X" && sqr6.text() == "X" && sqr9.text() == "X") {
      winMessage('x');
    } else if (sqr1.text() == "X" && sqr5.text() == "X" && sqr9.text() == "X") {
      winMessage('x');
    } else if (sqr3.text() == "X" && sqr5.text() == "X" && sqr7.text() == "X") {
      winMessage('x');
    } else if (sqr1.text() == "O" && sqr2.text() == "O" && sqr3.text() == "O") {
      winMessage('o');
    } else if (sqr4.text() == "O" && sqr5.text() == "O" && sqr6.text() == "O") {
      winMessage('o');
    } else if (sqr7.text() == "O" && sqr8.text() == "O" && sqr9.text() == "O") {
      winMessage('o');
    } else if (sqr1.text() == "O" && sqr4.text() == "O" && sqr7.text() == "O") {
      winMessage('o');
    } else if (sqr2.text() == "O" && sqr5.text() == "O" && sqr8.text() == "O") {
      winMessage('o');
    } else if (sqr3.text() == "O" && sqr6.text() == "O" && sqr9.text() == "O") {
      winMessage('o');
    } else if (sqr1.text() == "O" && sqr5.text() == "O" && sqr9.text() == "O") {
      winMessage('o');
    } else if (sqr3.text() == "O" && sqr5.text() == "O" && sqr7.text() == "O") {
      winMessage('o');
    }
  }

  function winMessage(letter) {
    if (letter == 'x') {
      alert("Player X wins!");
      reset();
    } else if (letter == 'o') {
      alert("Player O wins!");
      reset();
    };
  }

  function reset() {
    $('.box').text(" ");
  }

  // if no one matches 3, draw

});
