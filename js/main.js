'use strict';
$(document).ready(function() {
  var leagueInput;
  var leagueRank = [];

  var playerOrder = function(a, b) {
    return b[1] - a[1];
  } // end playerOrder

  var printOrder = function(arr) {
    $('#rankings').html('');
    var previousRank = 0;
    leagueInput = $('#nameInput').val().split(',');
    var playerName = leagueInput[0].trim();
    var playerScore = parseInt(leagueInput[1].trim());

    var nameIncluded = false;

    for (var i = 0; i < leagueRank.length; i++) {
      if (playerName == leagueRank[i][0]) {
        leagueRank[i][1] += playerScore;
        nameIncluded = true;
      }
    }

    if (!nameIncluded){
      leagueRank.push([playerName, playerScore]);
    }

    leagueRank.sort(playerOrder)

    for (var i = 0; i < leagueRank.length; i++) {
      if (leagueRank[i - 1] && leagueRank[i - 1][1] == leagueRank[i][1]) {
        $('#rankings').append('<li>' + previousRank + '. ' + arr[i][0] + ', ' + arr[i][1] + ' pts</li>');
      } else {
        previousRank = i + 1;
        $('#rankings').append('<li>' + previousRank + '. ' + arr[i][0] + ', ' + arr[i][1] + ' pts</li>');
      }
    }

  } // end printOrder

    $('#add').on('click', function() {
      printOrder(leagueRank);
      $('#nameInput').val('');
  }); // end add onclick

    $('#clear').on('click', function() {
      $('#rankings').html('');
      leagueRank = [];
  }); // end clear onclick

}); // end document ready
