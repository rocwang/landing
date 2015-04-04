'use strict';

jQuery(function ($) {

  // Constants
  var ORIGINAL_BG_WIDTH  = 1792;
  var ORIGINAL_BG_HEIGHT = 1440;
  var ROC_MOUTH_RATIO    = 1.2467;
  var VIVIEN_MOUTH_RATIO = 1.2467;
  var NON_MOBILE_WIDTH    = 768;
  var PAGE_PADDING_X     = 35;
  var SCROLLING_FACTOR   = 100;

  /********************************************************************************/

  // Help functions
  function adaptInfoHeight(sel) {
    var targetHeight = $(sel).height();
    var $info = $('.info');
    var minHeight = $(window).height() - parseInt( $info.css('top') );
    var infoHeight = Math.max(targetHeight, minHeight);
    $info.height(infoHeight);
  }

  function scrollBackAndTrigger(sel) {
    var scrollTop = $('html').scrollTop() || $('body').scrollTop();

    $('html, body').animate(
      {scrollTop:0},
      scrollTop / $(window).height() * SCROLLING_FACTOR,
      function() {$('body').trigger(sel);}
    );
  }

  /********************************************************************************/

  // Event handling
  $('body').on('both-roc', function() {
    $('body').removeClass('roc-both vivi-both').addClass('both-roc');
    scrollBackAndTrigger('show-roc');
  }).on('vivi-roc', function() {
    $('body').removeClass('both-vivi roc-vivi').addClass('vivi-roc');
    scrollBackAndTrigger('show-roc');
  }).on('both-vivi', function() {
    $('body').removeClass('vivi-both roc-both').addClass('both-vivi');
    scrollBackAndTrigger('show-vivi');
  }).on('roc-vivi', function() {
    $('body').removeClass('both-roc vivi-roc').addClass('roc-vivi');
    scrollBackAndTrigger('show-vivi');
  }).on('roc-both', function() {
    $('body').removeClass('both-roc vivi-roc').addClass('roc-both');
    scrollBackAndTrigger('show-both');
  }).on('vivi-both', function() {
    $('body').removeClass('both-vivi roc-vivi').addClass('vivi-both');
    scrollBackAndTrigger('show-both');
  }).on('click', '.to-both', function() {
    location.hash = '#both';
  }).on('click', '.to-roc', function() {
    location.hash = '#roc';
  }).on('click', '.to-vivi', function() {
    location.hash = '#vivi';
  }).on('click', '.print', function(e) {

    e.preventDefault();
    window.print();

  }).on('show-roc', function() {

    var $body = $('body');
    $body.removeClass('show-both show-vivi').addClass('show-roc');
    adaptInfoHeight('.roc-info');

    if ($(window).width() >= NON_MOBILE_WIDTH) {
      var winWidth = $(window).width();
      var bgWidth = $(window).height() * ORIGINAL_BG_WIDTH / ORIGINAL_BG_HEIGHT;
      $body.css('background-position',  (winWidth - bgWidth/2) + 'px top, 0 0');

      var $rocNameText =  $('.roc-name-text');
      $rocNameText.css('right', $('.roc-name').width() - $rocNameText.width() - PAGE_PADDING_X);

      // FIXME: Manually set for Firefox
      $('.vivi-name-text').css('left', '100%');

      var $hireRoc = $('#hire_roc');
      $hireRoc.width($hireRoc.height() * ROC_MOUTH_RATIO);
    }

  }).on('show-vivi', function() {

    var $body = $('body');
    $body.removeClass('show-both show-roc').addClass('show-vivi');
    adaptInfoHeight('.vivi-info');

    if ($(window).width() >= NON_MOBILE_WIDTH) {
      var bgWidth = $(window).height() * ORIGINAL_BG_WIDTH / ORIGINAL_BG_HEIGHT;
      $body.css('background-position', (-bgWidth/2) + 'px top, 0 0');

      // FIXME: Manually set for Firefox
      $('.roc-name-text').css('right', '100%');

      var $viviNameText =  $('.vivi-name-text');
      $viviNameText.css('left', $('.vivi-name').width() - $viviNameText.width() - PAGE_PADDING_X);

      var $hireVivi = $('#hire_vivi');
      $hireVivi.width($hireVivi.height() * VIVIEN_MOUTH_RATIO);
    }

  }).on('show-both', function() {

    var $body = $('body');
    $body.removeClass('show-roc show-vivi').addClass('show-both');
    adaptInfoHeight();

    if ($(window).width() >= NON_MOBILE_WIDTH) {
      // FIXME: Manually set for Firefox
      $body.css('background-position', 'center top, 0 0');
      $('.roc-name-text').css('right', 0);
      $('.vivi-name-text').css('left', 0);
    }

  }).on('layout', function() {
    var $body = $('body');
    $body.removeClass('both-roc both-vivi roc-vivi vivi-roc');

    if ($body.hasClass('show-roc')) {
      $body.trigger('show-roc');
    } else if ($body.hasClass('show-vivi')) {
      $body.trigger('show-vivi');
    } else if ($body.hasClass('show-both')) {
      $body.trigger('show-both');
    }
  });

  $(window).resize(function() {
    $('body').trigger('layout');
  }).on('hashchange', function(e, transition) {
    if (!transition) {
      var oldMatch = /#(.*)$/.exec(e.originalEvent.oldURL);
      var newMatch = /#(.*)$/.exec(e.originalEvent.newURL);
      var oldHash, newHash;

      if (oldMatch) {
        oldHash = oldMatch[1];
      } else {
        oldHash = 'both';
      }

      if (newMatch) {
        newHash = newMatch[1];
      } else {
        newHash = 'both';
      }

      transition = oldHash+'-'+newHash;
    }

    $('body').trigger(transition);
  });

});
