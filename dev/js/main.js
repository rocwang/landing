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

// Load and show humans.txt
jQuery.get('/humans.txt', function(data) { console.log(data); });

jQuery(function($) {

    // Constants
    var ORIGINAL_BG_WIDTH = 1792;
    var ORIGINAL_BG_HEIGHT = 1440;
    var ROC_MOUTH_RATIO = 1.2467;
    var VIVIEN_MOUTH_RATIO = 1.2467;
    var SCROLL_TOP_TIME = 400;
    var NONMOBILE_WIDTH = 768;
    var PAGE_PADDING_X = 35;

    /********************************************************************************/

    // Help functions
    function adaptInfoHeight(sel) {
        var targetHeight = $(sel).height();
        var minHeight = $(window).height() - $('.name').height() - $('.browsehappy').height();
        var infoHeight = Math.max(targetHeight, minHeight);
        $('.info').height(infoHeight);
    }

    function scrollBackAndTrigger(sel) {
        var scrollTop = $('html').scrollTop() || $('body').scrollTop();
        if (scrollTop) {
            $('html, body').animate(
                {scrollTop:0},
                SCROLL_TOP_TIME,
                function() {$('body').trigger(sel);}
            );
        } else {
            $('body').trigger(sel);
        }
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

        $('body').removeClass('show-both show-vivi').addClass('show-roc');
        adaptInfoHeight('.roc-info');

        if ($(window).width() >= NONMOBILE_WIDTH) {
            var winWidth = $(window).width();
            var bgWidth = $(window).height() * ORIGINAL_BG_WIDTH / ORIGINAL_BG_HEIGHT;
            $('body').css('background-position',  (winWidth - bgWidth/2) + 'px top, 0 0');

            $('.roc-name-text').css('right', $('.roc-name').width() - $('.roc-name-text').width() - PAGE_PADDING_X);

            // FIXME: Manually set for Firefox
            $('.vivi-name-text').css('left', '100%');

            $('#hire_roc').width($('#hire_roc').height() * ROC_MOUTH_RATIO);
        }

    }).on('show-vivi', function() {

        $('body').removeClass('show-both show-roc').addClass('show-vivi');
        adaptInfoHeight('.vivi-info');

        if ($(window).width() >= NONMOBILE_WIDTH) {
            var bgWidth = $(window).height() * ORIGINAL_BG_WIDTH / ORIGINAL_BG_HEIGHT;
            $('body').css('background-position', (-bgWidth/2) + 'px top, 0 0');

            // FIXME: Manually set for Firefox
            $('.roc-name-text').css('right', '100%');

            $('.vivi-name-text').css('left', $('.vivi-name').width() - $('.vivi-name-text').width() - PAGE_PADDING_X);

            $('#hire_vivi').width($('#hire_vivi').height() * VIVIEN_MOUTH_RATIO);
        }

    }).on('show-both', function() {

        $('body').removeClass('show-roc show-vivi').addClass('show-both');
        adaptInfoHeight();

        if ($(window).width() >= NONMOBILE_WIDTH) {
            // FIXME: Manually set for Firefox
            $('body').css('background-position', 'center top, 0 0');
            $('.roc-name-text').css('right', 0);
            $('.vivi-name-text').css('left', 0);
        }
    });

    $(window).resize(function() {
        $('body').removeClass('both-roc both-vivi roc-vivi vivi-roc');

        if ($('body').hasClass('show-roc')) {
            $('body').trigger('show-roc');
        } else if ($('body').hasClass('show-vivi')) {
            $('body').trigger('show-vivi');
        }
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

    /*****************************************************************************/

    /* Main */
    //FIXME: Firefox seems buggy when dealing transitions from a value set in external style to another one set in inline style,
    // so set the initial value in inline style first.
    $('body').trigger('show-both');

    $(window).trigger('hashchange', 'both-'+location.hash.substring(1));

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
