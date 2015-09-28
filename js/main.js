'use strict';
$(document).ready(function () {
  var leagueInput;
  var leagueRank = [];

  var playerOrder = function (a, b) {
    if (leagueRank.length > 1) {
      return b[1] - a[1];
    }
  }

  $('#add').on('click', function() {
    leagueInput = $('#nameInput').val().split(',');
    var playerName = leagueInput[0].trim();
    var playerScore = parseInt(leagueInput[1].trim());
    $('#rankings').append('<li>' + leagueInput + '</li>');
    leagueRank.push([playerName, playerScore]);
    console.log(leagueRank.sort(playerOrder));
    $('#nameInput').val(''); // reset input box to empty
  });

}); // end document ready

// check playerScore so that we can order them properly



// what needs to be happening is they need to go into an array
// then i need to compare that playerScore to the one before it --> leagueRank[i][1]
// i can have two different arrays maybe? ???? one for names and one for scores
