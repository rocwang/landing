jQuery(function($) {
    $('.roc').click(function(e) {
        if ($('.main').hasClass('show-roc')) {
            $('.main').removeClass('show-roc');
        } else {
            $('.main').removeClass('show-vivien').addClass('show-roc');
        }
    });

    $('.vivien').click(function(e) {
        if ($('.main').hasClass('show-vivien')) {
            $('.main').removeClass('show-vivien');
        } else {
            $('.main').removeClass('show-roc').addClass('show-vivien');
        }
    });
});
