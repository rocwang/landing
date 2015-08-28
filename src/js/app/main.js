'use strict';

jQuery(function ($) {

  // Events handling
  $('body').on('click', '.js-print', function (e) {
    e.preventDefault();
    window.print();
  });

  $('[data-toggle="tooltip"]').tooltip();

  $('#hire_roc').popover({
    content  : 'HIRE ME :)',
    trigger  : 'hover',
    placement: 'left',
    container: 'body'
  });

});
