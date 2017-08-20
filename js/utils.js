'use strict';

window.utils = (function () {
  var getRandomNumber = function (arr) {
    var randomNumber = Math.round((Math.random() * arr.length));
    return arr[randomNumber];
  };
  return {
    getRandomNumber: getRandomNumber
  };
})();
