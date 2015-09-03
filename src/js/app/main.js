'use strict';

jQuery(function ($) {

  // Portfolio Gallery {{{

  // Build gallery items array
  var tencetnPortfolio = [
    {src: 'img/portfolio/adidas.jpg', w: 1002, h: 1772, title: 'Adidas Neo'},
    {src: 'img/portfolio/cmb.jpg', w: 1200, h: 900, title: 'China Merchants Bank'},
    {src: 'img/portfolio/uni_president.jpg', w: 960, h: 600, title: 'Uni President'},
    {src: 'img/portfolio/weibo.jpg', w: 1200, h: 1956, title: 'QQ VIP Weibo'},
    {src: 'img/portfolio/fcwr.jpg', w: 1200, h: 1335, title: '"If you are the one"'},
    {src: 'img/portfolio/mid_autumn.jpg', w: 1200, h: 1322, title: 'Mid Autumn'},
    {src: 'img/portfolio/nba1.jpg', w: 1200, h: 1326, title: 'NBA 1'},
    {src: 'img/portfolio/nba2.jpg', w: 1200, h: 1045, title: 'NBA 2'},

    {src: 'img/portfolio/feature1.jpg', w: 1200, h: 1836, title: 'QQ VIP Feature Marketing Page 1'},
    {src: 'img/portfolio/feature2.jpg', w: 1200, h: 2495, title: 'QQ VIP Feature Marketing Page 2'},
    {src: 'img/portfolio/feature3.jpg', w: 1200, h: 1866, title: 'QQ VIP Feature Marketing Page 3'},
    {src: 'img/portfolio/feature4.jpg', w: 1200, h: 1733, title: 'QQ VIP Feature Marketing Page 4'},
    {src: 'img/portfolio/feature5.jpg', w: 1200, h: 2763, title: 'QQ VIP Feature Marketing Page 5'},
    {src: 'img/portfolio/feature6.jpg', w: 1200, h: 1983, title: 'QQ VIP Feature Marketing Page 6'},
    {src: 'img/portfolio/feature7.jpg', w: 1200, h: 1324, title: 'QQ VIP Feature Marketing Page 7'},

    {src: 'img/portfolio/mobile_cms.jpg', w: 983, h: 2127, title: 'QQ VIP Mobile Site Administration'},
    {src: 'img/portfolio/mobile1.jpg', w: 392, h: 829, title: 'QQ VIP Mobile Site 1'},
    {src: 'img/portfolio/mobile2.jpg', w: 392, h: 727, title: 'QQ VIP Mobile Site 2'},
    {src: 'img/portfolio/mobile3.jpg', w: 392, h: 670, title: 'QQ VIP Mobile Site 3'},
    {src: 'img/portfolio/mobile4.jpg', w: 392, h: 530, title: 'QQ VIP Mobile Site 4'},
    {src: 'img/portfolio/mobile5.jpg', w: 392, h: 1118, title: 'QQ VIP Mobile Site 5'},

    {src: 'img/portfolio/ent_cms.jpg', w: 957, h: 975, title: 'QQ VIP Activity Management'},
    {src: 'img/portfolio/ent1.jpg', w: 1002, h: 1842, title: 'Generated Page 1'},
    {src: 'img/portfolio/ent2.jpg', w: 1200, h: 1329, title: 'Generated Page 2'},
    {src: 'img/portfolio/ent3.jpg', w: 1200, h: 1329, title: 'Generated Page 3'},
    {src: 'img/portfolio/ent4.jpg', w: 1200, h: 1329, title: 'Generated Page 4'},
    {src: 'img/portfolio/ent5.jpg', w: 1200, h: 1329, title: 'Generated Page 5'},
    {src: 'img/portfolio/ent6.jpg', w: 1200, h: 1329, title: 'Generated Page 6'},
    {src: 'img/portfolio/ent7.jpg', w: 1200, h: 1329, title: 'Generated Page 7'},
    {src: 'img/portfolio/ent8.jpg', w: 1200, h: 1951, title: 'Generated Page 8'},
    {src: 'img/portfolio/ent9.jpg', w: 1200, h: 1336, title: 'Generated Page 9'},
    {src: 'img/portfolio/ent10.jpg', w: 1200, h: 1335, title: 'Generated Page 10'},
    {src: 'img/portfolio/ent11.jpg', w: 1200, h: 1329, title: 'Generated Page 11'},
    {src: 'img/portfolio/ent12.jpg', w: 1200, h: 1335, title: 'Generated Page 12'},
    {src: 'img/portfolio/ent13.jpg', w: 1200, h: 1335, title: 'Generated Page 13'},
    {src: 'img/portfolio/ent14.jpg', w: 1200, h: 1335, title: 'Generated Page 14'},

    {src: 'img/portfolio/delivery.jpg', w: 955, h: 662, title: 'In-house Tools - Virtual Prize Delivery System'},
    {src: 'img/portfolio/notification.jpg', w: 997, h: 1079, title: 'In-house Tools - User Notification System'},
    {src: 'img/portfolio/tip.jpg', w: 659, h: 600, title: 'In-house Tools - Refined Marketing System'},
  ];

  $('#portfolio__logo-link--qq').click(function (e) {
    e.preventDefault();

    // Initializes and opens PhotoSwipe
    var tencentPortfolioGallery = new PhotoSwipe($('.pswp')[0], PhotoSwipeUI_Default, tencetnPortfolio, {});

    tencentPortfolioGallery.init();
  });

  // }}}

  // Events handling
  $('body').on('click', '.js-print', function (e) {
    e.preventDefault();
    window.print();
  });

  // Hire me
  /*
  $('#hire-me').popover({
    content  : 'Hire me &#x1f603;',
    trigger  : 'hover',
    placement: 'left',
    html     : true,
    container: 'body',
  });

 $(window).load(function () {
    setTimeout(function () {
      $('#hire-me').popover('show');
      setTimeout(function () {
        $('#hire-me').popover('hide');
      }, 3000);
    }, 3000);
  });
  */
});