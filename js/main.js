'use strict';
$(document).ready(function () {
  var leagueInput;

  $('#add').on('click', function() {
    leagueInput = $('#nameInput').val();
    console.log(leagueInput);
    $('#rankings').append(leagueInput);
  });

}); // end document ready
