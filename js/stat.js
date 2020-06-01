'use strict';

// параметры облака

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

// параметры полосок графика

var BAR_WIDTH = 40;
var BAR_HEIGHT_MAX = 150;
var BAR_X = 140;
var BAR_Y = 90;
var BAR_GAP = 50;

var TEXT_GAP = 20;

var getRandomColor = function () {
  return 'hsl(240,' + Math.floor((Math.random() * 100).toString()) + '%,50%)';
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

// отрисовка облака

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

// отрисовка текста

var renderText = function (ctx, text, x, y) {
  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText(text, x, y);
};

// отрисовка графика

var renderChart = function (ctx, players, times) {
  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barX = BAR_X + (BAR_WIDTH + BAR_GAP) * i;
    var barGap = (BAR_HEIGHT_MAX * times[i]) / maxTime;
    renderText(ctx, Math.round(times[i]), barX, BAR_Y + BAR_HEIGHT_MAX - barGap - TEXT_GAP);

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = getRandomColor();
    }

    ctx.fillRect(barX, BAR_Y + BAR_HEIGHT_MAX - barGap, BAR_WIDTH, barGap);
    renderText(ctx, players[i], barX, BAR_Y + BAR_HEIGHT_MAX + (TEXT_GAP / 2));
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');
  renderText(ctx, 'Ура вы победили!', CLOUD_X + TEXT_GAP, CLOUD_Y + TEXT_GAP);
  renderText(ctx, 'Список результатов:', CLOUD_X + TEXT_GAP, CLOUD_Y + (TEXT_GAP * 2));
  renderChart(ctx, players, times);
};
