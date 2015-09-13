'use strict';
(function () {

  // Skills radar charts
  var skillset = {
    language : {
      labels: ['HTML', 'CSS (SASS/LESS)', 'Javascript', 'PHP', 'SQL', 'Objective-C'],
      data  : [90, 90, 80, 80, 70, 60],
    },
    framework: {
      labels: ['jQuery', 'Bootstrap', 'Magento', 'Yii', 'Node.js'],
      data  : [90, 90, 80, 50, 30],
    },
    tools    : {
      labels: ['Git', 'Shell/CLI', 'Vim', 'Gulp', 'Photoshop', 'Xcode'],
      data  : [80, 90, 80, 90, 30, 50],
    }
  };

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

    responsive: false,

    tooltipFillColor : '#2a2c2b',
    tooltipFontFamily: '"proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif',
    tooltipFontColor : '#d9cb9e',

    // Radar chart defaults:
    angleLineColor      : '#374140',
    pointLabelFontFamily: '"proxima-nova", "Helvetica Neue", Helvetica, Arial, sans-serif',
    pointLabelFontColor : '#d9cb9e',
  };

  for (var skill in skillset) {
    var context = document.getElementById('skills__chart--' + skill).getContext('2d');
    var data = {
      labels  : skillset[skill].labels,
      datasets: [{
        label: skill,
        data : skillset[skill].data,

        fillColor  : 'rgba(217,203,158,0.2)',
        strokeColor: '#d9cb9e',

        pointColor      : '#d9cb9e',
        pointStrokeColor: '#d9cb9e',

        pointHighlightFill  : '#db3522',
        pointHighlightStroke: '#db3522',
      }]
    };

    var radarChart = new Chart(context).Radar(data, options);
  }

})();
