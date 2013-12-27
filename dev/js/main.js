'use strict';

// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

jQuery(function($) {

    // Constants
    var ORIGINAL_BG_WIDTH = 1792;
    var ORIGINAL_BG_HEIGHT = 1440;
    var ROC_MOUTH_RATIO = 1.2467;
    var VIVIEN_MOUTH_RATIO = 1.2467;
    var SCROLL_TOP_TIME = 400;
    var NONMOBILE_WIDTH = 768;

    /********************************************************************************/

    // Help functions
    function adaptInfoHeight(sel) {
        var targetHeight = $(sel).height();
        var minHeight = $(window).height() - $('.name').height() - $('.browsehappy').height();
        var infoHeight = Math.max(targetHeight, minHeight);
        $('.info').height(infoHeight);
    }

    function scrollBackAndTrigger(sel) {
        if ($('body').scrollTop() === 0) {
            $('body').trigger(sel);
        } else {
            $('body').animate(
                {scrollTop:0},
                SCROLL_TOP_TIME,
                function() {$('body').trigger(sel);}
            );
        }
    }

    /********************************************************************************/

    $('body').on('click', '.both2roc', function() {
        $('body').removeClass('roc-both vivi-both').addClass('both-roc');
        scrollBackAndTrigger('show-roc');
    }).on('click', '.vivi2roc', function() {
        $('body').removeClass('both-vivi roc-vivi').addClass('vivi-roc');
        scrollBackAndTrigger('show-roc');
    }).on('click', '.both2vivi', function() {
        $('body').removeClass('vivi-both roc-both').addClass('both-vivi');
        scrollBackAndTrigger('show-vivi');
    }).on('click', '.roc2vivi', function() {
        $('body').removeClass('both-roc vivi-roc').addClass('roc-vivi');
        scrollBackAndTrigger('show-vivi');
    }).on('click', '.roc2both', function() {
        $('body').removeClass('both-roc vivi-roc').addClass('roc-both');
        scrollBackAndTrigger('show-both');
    }).on('click', '.vivi2both', function() {
        $('body').removeClass('both-vivi roc-vivi').addClass('vivi-both');
        scrollBackAndTrigger('show-both');
    }).on('click', '.print', function(e) {

        e.preventDefault();
        window.print();

    }).on('show-roc', function() {

        $('body').removeClass('show-both show-vivi').addClass('show-roc');
        adaptInfoHeight('.roc-info');

        if ($(window).width() >= NONMOBILE_WIDTH) {
            var winWidth = $(window).width();
            var bgWidth = $(window).height() * ORIGINAL_BG_WIDTH / ORIGINAL_BG_HEIGHT;
            $('body').css('background-position-x',  winWidth - bgWidth/2);

            $('.roc-name').css('right', $('.roc-name').parent().width() - $('.roc-name').width());
            $('.vivi-name').css('left', '');

            $('#hire_roc').width($('#hire_roc').height() * ROC_MOUTH_RATIO);
        }

    }).on('show-vivi', function() {

        $('body').removeClass('show-both show-roc').addClass('show-vivi');
        adaptInfoHeight('.vivi-info');

        if ($(window).width() >= NONMOBILE_WIDTH) {
            var bgWidth = $(window).height() * ORIGINAL_BG_WIDTH / ORIGINAL_BG_HEIGHT;
            $('body').css('background-position-x', -bgWidth/2);

            $('.roc-name').css('right', '');
            $('.vivi-name').css('left', $('.vivi-name').parent().width() - $('.vivi-name').width());

            $('#hire_vivi').width($('#hire_vivi').height() * VIVIEN_MOUTH_RATIO);
        }

    }).on('show-both', function() {

        $('body').removeClass('show-roc show-vivi').addClass('show-both');
        adaptInfoHeight();

        if ($(window).width() >= NONMOBILE_WIDTH) {
            $('body').css('background-position-x', '');

            $('.roc-name').css('right', '');
            $('.vivi-name').css('left', '');
        }
    });

    $(window).resize(function() {
        $('body').removeClass('both-roc both-vivi roc-vivi vivi-roc');

        if ($('body').hasClass('show-roc')) {
            $('body').trigger('show-roc');
        } else if ($('body').hasClass('show-vivi')) {
            $('body').trigger('show-vivi');
        }
    });

    /*****************************************************************************/

    /* Main */
    if (location.hash === '#roc') {
        setTimeout(function(){$('#show-roc-control').click();}, 1000);
    } else if (location.hash === '#vivi') {
        setTimeout(function(){$('#show-vivi-control').click();}, 1000);
    }

    $('.operation a').tooltip();
    $('#hire_roc').popover({
        content: 'HIRE ME PLEASE',
        trigger: 'hover',
        placement: 'left',
        container: 'body',
    });
    $('#hire_vivi').popover({
        content: 'HIRE ME PLEASE',
        trigger: 'hover',
        placement: 'right',
        container: 'body',
    });
});
