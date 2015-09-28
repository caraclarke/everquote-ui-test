'use strict';
$(document).ready(function() {
  var leagueInput;
  var leagueRank = [];

  var playerOrder = function(a, b) {
    return b[1] - a[1];
  } // end playerOrder

  var printOrder = function(leagueRank) {
    $('#rankings').html('');
    for (var i = 0; i < leagueRank.length; i++) {
      if (leagueRank.length == 1) {
        $('#rankings').append('<li>' + leagueRank + '</li>');
      } else if (leagueRank.length > 1) {
        $('#rankings').append('<li>' + leagueRank[i] + '</li>');
      }
    }
  }

  $('#add').on('click', function() {
    leagueInput = $('#nameInput').val().split(',');
    var playerName = leagueInput[0].trim();
    var playerScore = parseInt(leagueInput[1].trim());

    leagueRank.push([playerName, playerScore]);
    console.log(leagueRank.sort(playerOrder));
    printOrder(leagueRank);
    $('#nameInput').val('');
  });

}); // end document ready
