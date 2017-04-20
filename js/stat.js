'use strict';

window.renderStatistics = function (ctx, names, times) {
  var max = -1;
  var indent = 50;
  var barWidth = 40;
  var initialX = 120;
  var cloudHeight = 270;
  var currentColor = '#000000';
  var histogramWidth = 150;

  var drawRect = function (x1, y1, x2, y2, color) {
    ctx.fillStyle = color || '#000000';
    ctx.fillRect(x1, y1, x2, y2);
  };

  var drawText = function (text, x, y, color, font) {
    ctx.fillStyle = color || '#000000';
    ctx.font = font || '16px PT Mono';
    ctx.fillText(text, x, y);
  };

  drawRect(110, 20, 420, 270, 'rgba(0, 0, 0, 0.7)');
  drawRect(100, 10, 420, 270, '#ffffff');

  drawText('Ура вы победили!', 120, 40);
  drawText('Список результатов:', 120, 60);

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
    }
  }

  var step = histogramWidth / max;

  for (i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      currentColor = 'rgba(255, 0, 0, 1)';
    } else {
      currentColor = 'rgb(0, 0, ' + Math.round(Math.random() * 255) + ')';
    }

    drawRect(initialX + (indent + barWidth) * i, cloudHeight - times[i] * step - 30, barWidth, times[i] * step, currentColor);
    drawText(times[i].toFixed(0), initialX + (indent + barWidth) * i, cloudHeight - times[i] * step - 35);
    drawText(names[i], initialX + (indent + barWidth) * i, cloudHeight - 10);
  }

};
