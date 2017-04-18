'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.strokeRect(110, 20, 420, 270);
  ctx.fillRect(110, 20, 420, 270);
  ctx.fillStyle = '#fff';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);
  var max = -1;
  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }
  var histogramWidth = 150;
  var step = histogramWidth / max;
  var indent = 50;
  var barWidth = 40;
  var initialX = 120;
  var cloudHeight = 270;
  ctx.textBaseline = 'top';
  for (var j = 0; j < times.length; j++) {
    ctx.fillRect(initialX + (indent + barWidth) * j, cloudHeight - times[j] * step - 30, barWidth, times[j] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(times[j].toFixed(0), initialX + (indent + barWidth) * j, cloudHeight - times[j] * step - 50);
    ctx.fillText(names[j], initialX + (indent + barWidth) * j, cloudHeight - 20);
  }
};
