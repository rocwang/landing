'use strict';

// Events handling
jQuery(function ($) {

  $('body').on('click', '.js-print', function(e) {
    e.preventDefault();
    window.print();
  });

});
