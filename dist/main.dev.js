"use strict";

$(document).ready(function () {
  $(document).ready(function () {
    $('.dropdown-toggler').click(function () {
      var dropdownId = $(this).data('dropdown');
      $('#' + dropdownId).toggle();
    });
  });
  $('#load-more-content').click(function () {
    $('#more-content').toggleClass('shown');
    $('#load-more-content').hide();

    if ($('#more-content').hasClass('shown')) {
      $('#load-more-content').text('Hide content');
      $('#more-content').fadeIn('slow', function () {
        $('#load-more-content').fadeIn('slow');
      });
    } else {
      $('#load-more-content').text('Load some content');
      $('#more-content').fadeOut('slow', function () {
        $('#load-more-content').fadeIn('slow');
      });
    }
  });
});