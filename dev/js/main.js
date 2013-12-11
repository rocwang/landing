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
    var EXATR_SMALL_WIDTH = 768;
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

    /********************************************************************************/

    $('body').on('click', '.both2roc', function(e) {
        $('body').removeClass('roc-both vivi-both').addClass('both-roc').trigger('show-roc');
    }).on('click', '.vivi2roc', function(e) {
        $('body').removeClass('both-vivi roc-vivi').addClass('vivi-roc').trigger('show-roc');
    }).on('click', '.both2vivi', function(e) {
        $('body').removeClass('vivi-both roc-both').addClass('both-vivi').trigger('show-vivi');
    }).on('click', '.roc2vivi', function(e) {
        $('body').removeClass('both-roc vivi-roc').addClass('roc-vivi').trigger('show-vivi');
    }).on('click', '.roc2both', function(e) {
        $('body').removeClass('both-roc vivi-roc').addClass('roc-both').trigger('show-both');
    }).on('click', '.vivi2both', function(e) {
        $('body').removeClass('both-vivi roc-vivi').addClass('vivi-both').trigger('show-both');
    }).on('click', '.show-control', function(e) {

        $('.show-control').addClass('hidden');

    }).on('click', '.print', function(e) {

        e.preventDefault();
        window.print();

    }).on('show-roc', function(e) {

        function show() {
            $('body').removeClass('show-both show-vivi').addClass('show-roc');
            adaptInfoHeight('.roc-info');

            if ($(window).width() >= NONMOBILE_WIDTH) {
                var win_width = $(window).width();
                var bg_width = $(window).height() * ORIGINAL_BG_WIDTH / ORIGINAL_BG_HEIGHT;
                $('body').css('background-position-x',  win_width - bg_width/2);

                $('.roc-name').css('right', $('.roc-name').parent().width() - $('.roc-name').width());
                $('.vivi-name').css('left', '');

                $('#hire_roc').width($('#hire_roc').height() * ROC_MOUTH_RATIO);

            }
        }

        if ($('body').scrollTop() === 0) {
            show();
        } else {
            $('body').animate({scrollTop:0}, SCROLL_TOP_TIME, show);
        }

    }).on('show-vivi', function(e) {

        function show() {
            $('body').removeClass('show-both show-roc').addClass('show-vivi');
            adaptInfoHeight('.vivi-info');

            if ($(window).width() >= NONMOBILE_WIDTH) {
                var bg_width = $(window).height() * ORIGINAL_BG_WIDTH / ORIGINAL_BG_HEIGHT;
                $('body').css('background-position-x', -bg_width/2);

                $('.roc-name').css('right', '');
                $('.vivi-name').css('left', $('.vivi-name').parent().width() - $('.vivi-name').width());

                $('#hire_vivi').width($('#hire_vivi').height() * VIVIEN_MOUTH_RATIO);
            }
        }

        if ($('body').scrollTop() === 0) {
            show();
        } else {
            $('body').animate({scrollTop:0}, SCROLL_TOP_TIME, show);
        }

    }).on('show-both', function(e) {

        function show() {
            $('body').removeClass('show-roc show-vivi').addClass('show-both');
            adaptInfoHeight();

            if ($(window).width() >= NONMOBILE_WIDTH) {
                $('body').css('background-position-x', '');

                $('.roc-name').css('right', '');
                $('.vivi-name').css('left', '');

                $('.show-control').removeClass('hidden');
            }
        }

        if ($('body').scrollTop() === 0) {
            show();
        } else {
            $('body').animate({scrollTop:0}, SCROLL_TOP_TIME, show);
        }

    });

    //TODO: Optimize this.
    $(window).resize(function(e) {
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
        setTimeout(function(){$('#show-roc-control').click();}, 1000);;
    } else if (location.hash === '#vivi') {
        setTimeout(function(){$('#show-vivi-control').click();}, 1000);;
    }
    //$(window).trigger('resize');

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
