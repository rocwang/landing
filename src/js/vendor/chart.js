'use strict';
(function () {

  var options = {
    // Global defaults:
    animation: false,

    scaleOverride   : true,
    scaleSteps      : 10,
    scaleStepWidth  : 10,
    scaleStartValue : 0,
    scaleBeginAtZero: 0,

    scaleLineColor : '#374140',
    scaleFontFamily: '"proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif',
    scaleFontColor : '#d9cb9e',

    responsive: true,

    tooltipFillColor : '#2a2c2b',
    tooltipFontFamily: '"proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif',
    tooltipFontColor : '#d9cb9e',

    // Radar chart defaults:
    angleLineColor      : '#374140',
    pointLabelFontFamily: '"proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif',
    pointLabelFontColor : '#d9cb9e',
  };

  var barCharts = document.querySelectorAll('.js-bar-chart');

  barCharts.forEach(function (chart) {

    var skill = chart.getAttribute('data-label');
    var bars = chart.querySelectorAll('.js-bar-chart__bar');
    var labels = [];
    var values = [];

    bars.forEach(function (bar) {
      labels.push(bar.textContent);
      values.push(bar.getAttribute('aria-valuenow'));
    });

    var context = document.getElementById('skills__chart--' + skill).getContext('2d');
    var data = {
      labels  : labels,
      datasets: [{
        label: skill,
        data : values,

        fillColor  : 'rgba(217,203,158,0.2)',
        strokeColor: '#d9cb9e',

        pointColor      : '#d9cb9e',
        pointStrokeColor: '#d9cb9e',

        pointHighlightFill  : '#db3522',
        pointHighlightStroke: '#db3522',
      }],
    };

    // Skills radar charts
    /*global Chart:true*/
    new Chart(context).Radar(data, options);
  });

})();
