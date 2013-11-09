jQuery(function($) {

    var ORIGINAL_BG_WIDTH = 1792;
    var ORIGINAL_BG_HEIGHT = 1440;
    var EXATR_SMALL_WIDTH = 768;
    var ROC_MOUTH_RATIO = 1.2467;
    var VIVIEN_MOUTH_RATIO = 1.2467;
    var SCROLL_TOP_TIME = 400;

    $('.both2roc').click(function(e) {
        $('body').removeClass('roc-both vivien-both').addClass('both-roc').trigger('show-roc');
    });

    $('.vivien2roc').click(function(e) {
        $('body').removeClass('both-vivien roc-vivien').addClass('vivien-roc').trigger('show-roc');
    });

    $('.both2vivien').click(function(e) {
        $('body').removeClass('vivien-both roc-both').addClass('both-vivien').trigger('show-vivien');
    });

    $('.roc2vivien').click(function(e) {
        $('body').removeClass('both-roc vivien-roc').addClass('roc-vivien').trigger('show-vivien');
    });


    $('.roc2both').click(function(e) {
        $('body').removeClass('both-roc vivien-roc').addClass('roc-both').trigger('show-both');
    });

    $('.vivien2both').click(function(e) {
        $('body').removeClass('both-vivien roc-vivien').addClass('vivien-both').trigger('show-both');
    });

    /*****************************************************************************/

    $('body').on('show-roc', function(e) {
        function show() {
            var win_width = $(window).width();
            var bg_width = $(window).height() * ORIGINAL_BG_WIDTH / ORIGINAL_BG_HEIGHT;

            $('body').removeClass('show-both show-vivien').addClass('show-roc').css('background-position-x',  win_width - bg_width/2);

            $('.roc-name').css('right', $('.roc-name').parent().width() - $('.roc-name').width());
            $('.vivien-name').css('left', '');

            $('#hire_roc').width($('#hire_roc').height() * ROC_MOUTH_RATIO);
        }

        if ($('body').scrollTop() == 0) {
            show();
        } else {
            $('body').animate({scrollTop:0}, SCROLL_TOP_TIME, show);
        }
    });

    $('body').on('show-vivien', function(e) {
        function show() {
            var bg_width = $(window).height() * ORIGINAL_BG_WIDTH / ORIGINAL_BG_HEIGHT;

            $('body').removeClass('show-both show-roc').addClass('show-vivien').css('background-position-x', -bg_width/2);

            $('.roc-name').css('right', '');
            $('.vivien-name').css('left', $('.vivien-name').parent().width() - $('.vivien-name').width());

            $('#hire_vivien').width($('#hire_vivien').height() * VIVIEN_MOUTH_RATIO);
        }

        if ($('body').scrollTop() == 0) {
            show();
        } else {
            $('body').animate({scrollTop:0}, SCROLL_TOP_TIME, show);
        }
    });

    $('body').on('show-both', function(e) {
        function show() {

            $('body').removeClass('show-roc show-vivien').addClass('show-both').css('background-position-x', '');

            $('.roc-name').css('right', '');
            $('.vivien-name').css('left', '');

            $('.show-control').removeClass('hidden');
        }

        if ($('body').scrollTop() == 0) {
            show();
        } else {
            $('body').animate({scrollTop:0}, SCROLL_TOP_TIME, show);
        }
    });
    /*****************************************************************************/
    $('.show-control').click(function(e) {
        $('.show-control').addClass('hidden');
    });

    $(window).resize(function(e) {
        $('body').removeClass('both-roc both-vivien roc-vivien vivien-roc');

        if ($('body').hasClass('show-roc')) {
            $('body').trigger('show-roc');
        } else if ($('body').hasClass('show-vivien')) {
            $('body').trigger('show-vivien');
        }
    });

    $('.progress-bar').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView && visiblePartY == 'both') {
            $(this).width($(this).attr('aria-valuenow')+'%').off('inview');
        }
    });

    $('.print').click(function(e) {
        e.preventDefault();
        window.print();
    });

    /*****************************************************************************/

    if (location.hash == '#roc') {
        setTimeout(function(){$('#show-roc-control').click();}, 1000);;
    } else if (location.hash == '#vivien') {
        setTimeout(function(){$('#show-vivien-control').click();}, 1000);;
    }

    $('.operation a').tooltip();
    $('#roc-qrcode').popover({
        html: true,
        content: '<img src="img/roc-qrcode.png" alt="QR Code to this site">',
        trigger: 'hover',
        placement: 'top',
        container: 'body',
    });
    $('#vivien-qrcode').popover({
        html: true,
        content: '<img src="img/roc-qrcode.png" alt="QR Code to this site">',
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
});
