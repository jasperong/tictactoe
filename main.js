$(document).on('ready', function(){
  var turn = 0;
  // if player clicks box, either x for turn odd or o for turn even
  $('.box').on('click', function(){
    if ($(this).text() == " ") {
      // Player script
      $(this).text("X").removeClass("unclicked");
      turn++;
      // AI script
      $($('.unclicked')[Math.floor(Math.random() * $('.unclicked').length)]).text("O").removeClass("unclicked");
      turn++;
    }
      checkWin();
  });
  // if 3 boxes match x/o, player wins
  function checkWin() {
    if ($('.row1').text() === "XXX" || $('.row2').text() === "XXX" || $('.row3').text() === "XXX" ||
        $('.column1').text() === "XXX" || $('.column2').text() === "XXX" || $('.column3').text() === "XXX" ||
        $('.diag1').text() === "XXX" || $('.diag2').text() === "XXX") {
      winMessage('x');
    } else if ($('.row1').text() === "OOO" || $('.row2').text() === "OOO" || $('.row3').text() === "OOO" ||
        $('.column1').text() === "OOO" || $('.column2').text() === "OOO" || $('.column3').text() === "OOO" ||
        $('.diag1').text() === "OOO" || $('.diag2').text() === "OOO") {
      winMessage('o');
    } else if (turn >= 9) {
        alert("Its a draw!");
        reset();
      }
    };
  // Check who wins and show an alert
  function winMessage(letter) {
    if (letter == 'x') {
      alert("Player X wins!");
      reset();
    } else if (letter == 'o') {
      alert("Player O wins!");
      reset();
    };
  }
  // Resets the grid when someone wins or if both players draw
  function reset() {
    $('.box').text(" ");
    turn = 0;
    $('.box').addClass("unclicked");
  }
});
