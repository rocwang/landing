'use strict';

jQuery(function ($) {

  $('[data-toggle="tooltip"]').tooltip();

  $('#hire_roc').popover({
    content  : 'HIRE ME :)',
    trigger  : 'hover',
    placement: 'left',
    container: 'body'
  });
});
