jQuery(function($) {

    var ORIGINAL_BG_WIDTH = 2560;
    var ORIGINAL_BG_HEIGHT = 1440;

    function expandNames() {
        $('.roc-name').css('right', $('.roc-name').parent().width() - $('.roc-name').width());
        $('.vivien-name').css('left', $('.vivien-name').parent().width() - $('.vivien-name').width());
    }

    function shrinkNames() {
        $('.roc-name').css('right', 0);
        $('.vivien-name').css('left', 0);
    }

    $('.skill, .software').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
        if (isInView && visiblePartY == 'both' && $(this).css('visibility') == 'visible') {
            $(this).find('.progress-bar').each(function(index, element) {
                $(this).width($(this).attr('aria-valuenow')+'%');
            });
            $(this).off('inview');
        }
    });

    $(window).resize(function(e) {
        var win_height = $(window).height();
        var win_width = $(window).width();
        var bg_width = win_height * ORIGINAL_BG_WIDTH / ORIGINAL_BG_HEIGHT;

        if ($('body').hasClass('show-both')) {
            // Do nothing
        } else if ($('body').hasClass('show-roc')) {
            $('body').removeClass('both-roc vivien-roc').css('background-position-x', win_width - bg_width/2);
            expandNames();
        } else if ($('body').hasClass('show-vivien')) {
            $('body').removeClass('both-vivien roc-vivien').css('background-position-x', -bg_width/2);
            expandNames();
        }
    });

    $('.roc-name').click(function(e) {

        var win_height = $(window).height();
        var win_width = $(window).width();
        var bg_width = win_height * ORIGINAL_BG_WIDTH / ORIGINAL_BG_HEIGHT;

        if ($('body').hasClass('show-both')) {

            $('body').removeClass().addClass('both-roc show-roc').
                css('background-position-x',  win_width - bg_width/2);

            expandNames();

        } else if ($('body').hasClass('show-roc')) {

            $('body').removeClass().addClass('roc-both show-both')
                .css('background-position-x', 'center');

            shrinkNames();

        } else if ($('body').hasClass('show-vivien')) {

            $('body').removeClass().addClass('vivien-roc show-roc').
                css('background-position-x', win_width - bg_width/2);

        };

    });

    $('.vivien-name').click(function(e) {

        var win_height = $(window).height();
        var bg_width = win_height * ORIGINAL_BG_WIDTH / ORIGINAL_BG_HEIGHT;

        if ($('body').hasClass('show-both')) {

            $('body').removeClass().addClass('both-vivien show-vivien').
                css('background-position-x', -bg_width/2);

            expandNames();

        } else if ($('body').hasClass('show-vivien')) {

            $('body').removeClass().addClass('vivien-both show-both').
                css('background-position-x', 'center');

            shrinkNames();

        } else if ($('body').hasClass('show-roc')) {

            $('body').removeClass().addClass('roc-vivien show-vivien').
                css('background-position-x', -bg_width/2);

        };

    });

    if (location.hash == '#roc') {
        $('.roc-name').click();
    } else if (location.hash == '#vivien') {
        $('.vivien-name').click();
    }
});
