'use strict';
(function () {

  // Print
  document.getElementById('print').addEventListener('click', function (e) {
    e.preventDefault();
    window.print();
  });

  // Hire me {{{
  var hireMe = document.getElementById('hire-me');
  hireMe.addEventListener('touchstart', function () {
    document.getElementById('hire-me__popover').classList.toggle('hire-me__popover--js-visible');
  });
  hireMe.addEventListener('mouseenter', function () {
    document.getElementById('hire-me__popover').classList.add('hire-me__popover--js-visible');
  });
  hireMe.addEventListener('mouseleave', function () {
    document.getElementById('hire-me__popover').classList.remove('hire-me__popover--js-visible');
  });

  window.addEventListener('load', function () {
    setTimeout(function () {
      document.getElementById('hire-me__popover').classList.add('hire-me__popover--js-visible');
      setTimeout(function () {
        document.getElementById('hire-me__popover').classList.remove('hire-me__popover--js-visible');
      }, 3000);
    }, 3000);
  });
  // }}}

  // Load vendor.js
  window.addEventListener('load', function () {
    function loadJsOnLoad(src) {
      var element = document.createElement('script');
      element.src = src;
      element.async = true;
      document.body.appendChild(element);
    }

    loadJsOnLoad('js/vendor.js');
  });

})();
