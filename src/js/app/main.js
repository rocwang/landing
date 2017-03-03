'use strict';
(function () {

  // Replace 'no-js' with 'js' on the <html> tag
  document.documentElement.className = document.documentElement.className.replace('no-js', 'js');

  // Print
  document.getElementById('print').addEventListener('click', function (e) {
    e.preventDefault();
    window.print();
  });

})();
