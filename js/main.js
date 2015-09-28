'use strict';
$(document).ready(function() {
  var leagueInput;
  var leagueRank = [];

  var playerOrder = function(a, b) {
    return b[1] - a[1];
  } // end playerOrder

  var printOrder = function(arr) {
    $('#rankings').html('');
    var previousRank = 1;
    leagueInput = $('#nameInput').val().split(',');
    var playerName = leagueInput[0].trim();
    var playerScore = parseInt(leagueInput[1].trim());

    leagueRank.push([playerName, playerScore]);
    leagueRank.sort(playerOrder)

      for (var i = 0; i < leagueRank.length; i++) {
        // debugger;
        if (leagueRank[i - 1] && leagueRank[i - 1][1] == leagueRank[i][1]) {
          $('#rankings').append('<li>' + previousRank + '. ' + arr[i] + '</li>');
        } else {
          previousRank = i + 1;
          $('#rankings').append('<li>' + previousRank + '. ' + arr[i] + '</li>');
        }
      }
    } // end printOrder

  $('#add').on('click', function() {
    printOrder(leagueRank);
    $('#nameInput').val('');
  }); // end onclick

}); // end document ready
