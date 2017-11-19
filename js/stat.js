'use strict';

window.renderStatistics = function (ctx, names, times) {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.arc(130, 40, 20, 180 * (Math.PI / 180), 270 * (Math.PI / 180));
  ctx.arc(510, 40, 20, 270 * (Math.PI / 180), 360 * (Math.PI / 180));
  ctx.arc(510, 270, 20, 360 * (Math.PI / 180), 90 * (Math.PI / 180));
  ctx.arc(130, 270, 20, 90 * (Math.PI / 180), 180 * (Math.PI / 180));
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.beginPath();
  ctx.fillStyle = 'rgba(256, 256, 256, 1.0)';
  ctx.arc(120, 30, 20, 180 * (Math.PI / 180), 270 * (Math.PI / 180));
  ctx.arc(500, 30, 20, 270 * (Math.PI / 180), 360 * (Math.PI / 180));
  ctx.arc(500, 260, 20, 360 * (Math.PI / 180), 90 * (Math.PI / 180));
  ctx.arc(120, 260, 20, 90 * (Math.PI / 180), 180 * (Math.PI / 180));
  ctx.closePath();
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = '#000';
  ctx.font = '14px PT Mono';

  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов:', 120, 60);

  var max = -1;
  var maxIndex = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time;
      maxIndex = i;
    }
  }

  var histogramHeigth = 150; // px;
  var step = histogramHeigth / (max - 0); // px;
  var initialX = 140; // px;
  var initialY = 250; // px;
  var barWidth = 40; // px;
  var indent = 90; // px;
  var lineHeight = 20; // px;

  for (var i = 0; i < times.length; i++) {
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var color = [0, 0, 255, parseFloat(Math.random().toFixed(1)) + 0.1];
      ctx.fillStyle = 'rgba' + '(' + color + ')';
    }
    ctx.fillRect(initialX + indent * i, initialY, barWidth, -times[i] * step);
    ctx.fillStyle = '#000';
    ctx.fillText(names[i], initialX + indent * i, initialY + lineHeight);
    ctx.fillText(Math.round(times[i]), initialX + indent * i, initialY - times[i] * step - lineHeight / 2);
  }
};
