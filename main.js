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

    var ORIGINAL_BG_WIDTH = 1792;
    var ORIGINAL_BG_HEIGHT = 1440;
    var EXATR_SMALL_WIDTH = 768;
    var ROC_MOUTH_RATIO = 1.2467;
    var VIVIEN_MOUTH_RATIO = 1.2467;
    var SCROLL_TOP_TIME = 400;
    var NONMOBILE_WIDTH = 768;

    $('body').on('click', '.both2roc', function(e) {

        $('body').removeClass('roc-both vivien-both').addClass('both-roc').trigger('show-roc');

    }).on('click', '.vivien2roc', function(e) {

        $('body').removeClass('both-vivien roc-vivien').addClass('vivien-roc').trigger('show-roc');

    }).on('click', '.both2vivien', function(e) {

        $('body').removeClass('vivien-both roc-both').addClass('both-vivien').trigger('show-vivien');

    }).on('click', '.roc2vivien', function(e) {

        $('body').removeClass('both-roc vivien-roc').addClass('roc-vivien').trigger('show-vivien');

    }).on('click', '.roc2both', function(e) {

        $('body').removeClass('both-roc vivien-roc').addClass('roc-both').trigger('show-both');

    }).on('click', '.vivien2both', function(e) {

        $('body').removeClass('both-vivien roc-vivien').addClass('vivien-both').trigger('show-both');

    }).on('click', '.show-control', function(e) {

        $('.show-control').addClass('hidden');

    }).on('click', '.print', function(e) {

        e.preventDefault();
        window.print();

    }).on('show-roc', function(e) {

        function show() {
            $('body').removeClass('show-both show-vivien').addClass('show-roc');

            if ($(window).width() < NONMOBILE_WIDTH) {


            } else {

                var win_width = $(window).width();
                var bg_width = $(window).height() * ORIGINAL_BG_WIDTH / ORIGINAL_BG_HEIGHT;
                $('body').css('background-position-x',  win_width - bg_width/2);

                $('.roc-name').css('right', $('.roc-name').parent().width() - $('.roc-name').width());
                $('.vivien-name').css('left', '');

                $('#hire_roc').width($('#hire_roc').height() * ROC_MOUTH_RATIO);

            }
        }

        if ($('body').scrollTop() === 0) {
            show();
        } else {
            $('body').animate({scrollTop:0}, SCROLL_TOP_TIME, show);
        }

    }).on('show-vivien', function(e) {

        function show() {

            $('body').removeClass('show-both show-roc').addClass('show-vivien');

            if ($(window).width() < NONMOBILE_WIDTH) {


            } else {

                var bg_width = $(window).height() * ORIGINAL_BG_WIDTH / ORIGINAL_BG_HEIGHT;
                $('body').css('background-position-x', -bg_width/2);

                $('.roc-name').css('right', '');
                $('.vivien-name').css('left', $('.vivien-name').parent().width() - $('.vivien-name').width());

                $('#hire_vivien').width($('#hire_vivien').height() * VIVIEN_MOUTH_RATIO);
            }
        }

        if ($('body').scrollTop() === 0) {
            show();
        } else {
            $('body').animate({scrollTop:0}, SCROLL_TOP_TIME, show);
        }

    }).on('show-both', function(e) {

        function show() {

            $('body').removeClass('show-roc show-vivien').addClass('show-both').css('background-position-x', '');

            $('.roc-name').css('right', '');
            $('.vivien-name').css('left', '');

            $('.show-control').removeClass('hidden');
        }

        if ($('body').scrollTop() === 0) {
            show();
        } else {
            $('body').animate({scrollTop:0}, SCROLL_TOP_TIME, show);
        }

    });

    $(window).resize(function(e) {
        $('body').removeClass('both-roc both-vivien roc-vivien vivien-roc');

        if ($('body').hasClass('show-roc')) {
            $('body').trigger('show-roc');
        } else if ($('body').hasClass('show-vivien')) {
            $('body').trigger('show-vivien');
        }
    });

    /*****************************************************************************/

    /* Main */
    if (location.hash === '#roc') {
        setTimeout(function(){$('#show-roc-control').click();}, 1000);;
    } else if (location.hash === '#vivien') {
        setTimeout(function(){$('#show-vivien-control').click();}, 1000);;
    }

    $('.operation a').tooltip();
    $('#roc-qrcode').popover({
        html: true,
        content: '<img src="img/roc-qrcode.png" alt="QR Code to this page">',
        trigger: 'hover',
        placement: 'top',
        container: 'body',
    });
    $('#vivien-qrcode').popover({
        html: true,
        content: '<img src="img/roc-qrcode.png" alt="QR Code to this page">',
        trigger: 'hover',
        placement: 'top',
        container: 'body',
    });
    $('#hire_roc').popover({
        content: 'HIRE ME PLEASE',
        trigger: 'hover',
        placement: 'left',
        container: 'body',
    });
    $('#hire_vivien').popover({
        content: 'HIRE ME PLEASE',
        trigger: 'hover',
        placement: 'right',
        container: 'body',
    });

    if ($(window).width() < NONMOBILE_WIDTH) {
        $('.roc-name-container').addClass('both2roc');
        $('.vivien-name-container').addClass('both2vivien');
    }
});
