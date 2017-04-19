'use strict';

window.renderStatistics = function (ctx, names, times) {
  var max = -1;
  var drawCloud = function () {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
    ctx.strokeRect(110, 20, 420, 270);
    ctx.fillRect(110, 20, 420, 270);
    ctx.fillStyle = '#fff';
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(100, 10, 420, 270); 
  };
  var writeText = function () {
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', 120, 40);
    ctx.fillText('Список результатов:', 120, 60);
  };
  var histo = function () {
    var indent = 50;
    var barWidth = 40;
    var initialX = 120;
    var cloudHeight = 270;
    ctx.textBaseline = 'top';
    for (var i = 0; i < times.length; i++) {
      var time = times[i];
      if (time > max) {
        max = time;
      }
    }
    var histogramWidth = 150;
    var step = histogramWidth / max;
    for (var i = 0; i < times.length; i++) {
      ctx.fillRect(initialX + (indent + barWidth) * i, cloudHeight - times[i] * step - 30, barWidth, times[i] * step);
      ctx.fillStyle = '#000';
      ctx.fillText(times[i].toFixed(0), initialX + (indent + barWidth) * i, cloudHeight - times[i] * step - 50);
      ctx.fillText(names[i], initialX + (indent + barWidth) * i, cloudHeight - 20);
    }
  };
  drawCloud();
  writeText();
  histo();
};
