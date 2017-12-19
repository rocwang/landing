'use strict';
(function() {

  // Replace 'no-js' with 'js' on the <html> tag
  document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

  // Load vendor.js
  window.addEventListener('load', function() {
    function loadJsOnLoad(src) {
      var element   = document.createElement('script');
      element.src   = src;
      element.async = true;
      document.body.appendChild(element);
    }

    loadJsOnLoad('js/vendor.js');
  });

})();
