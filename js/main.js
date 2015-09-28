'use strict';
$(document).ready(function () {
  // var leagueInput;

  $('#add').on('click', function() {
    var leagueInput = $('#nameInput').val().split(',');
    var playerName = leagueInput[0].trim();
    var playerScore = parseInt(leagueInput[1].trim());
    console.log(playerName);
    console.log(playerScore);
    $('#rankings').append('<li>' + leagueInput + '</li>');
    $('#nameInput').val(''); // reset input box to empty
  });

}); // end document ready
