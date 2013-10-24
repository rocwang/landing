jQuery(function($) {
    var bg_width = 2000;

    $('.roc-name').click(function(e) {
        if ($('body').hasClass('show-both')) {

            $('body').removeClass().addClass('both-roc show-roc').css('background-position-x', function(index, value) {
                return $('body').width() - bg_width/2;
            });

        } else if ($('body').hasClass('show-roc')) {

            $('body').removeClass().addClass('roc-both show-both').css('background-position-x', 'center');

        } else if ($('body').hasClass('show-vivien')) {

            $('body').removeClass().addClass('vivien-roc show-roc').css('background-position-x', function(index, value) {
                return $('body').width() - bg_width/2;
            });

        };
    });

    $('.vivien-name').click(function(e) {
        if ($('body').hasClass('show-both')) {

            $('body').removeClass().addClass('both-vivien show-vivien').css('background-position-x', function(index, value) {
                return -bg_width/2;
            });

        } else if ($('body').hasClass('show-vivien')) {

            $('body').removeClass().addClass('vivien-both show-both').css('background-position-x', 'center');

        } else if ($('body').hasClass('show-roc')) {

            $('body').removeClass().addClass('roc-vivien show-vivien').css('background-position-x', function(index, value) {
                return -bg_width/2;
            });

        };
    });
});
