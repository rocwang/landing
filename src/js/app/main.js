'use strict';

// Load and show humans.txt
jQuery.get('/humans.txt', function (data) { console.log(data); });

jQuery(function ($) {

  //FIXME: Firefox seems buggy when dealing transitions from a value set in external style to another one set in inline style,
  // so set the initial value in inline style first.
  $('body').trigger('show-both');

  $(window).trigger('hashchange', 'both-' + location.hash.substring(1));

  $('.operation a').tooltip();
  $('#hire_roc').popover({
    content: 'HIRE ME PLEASE',
    trigger: 'hover',
    placement: 'left',
    container: 'body'
  });
  $('#hire_vivi').popover({
    content: 'HIRE ME PLEASE',
    trigger: 'hover',
    placement: 'right',
    container: 'body'
  });

  var viviWorks = $('.vivi-work-container');

  viviWorks.isotope({

    itemSelector: 'a',
    layoutMode: 'masonry'

  });

  viviWorks.isotope('on', 'layoutComplete', function () {

    $('body').trigger('layout');

  });

  viviWorks.imagesLoaded(function () {

    viviWorks.isotope('layout');

  });
});
