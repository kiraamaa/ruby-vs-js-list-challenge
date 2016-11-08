'use strict';

const any = function (array, callback) {
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true;
    }
  }

  return false;
};

const none = function (array, callback) {
  return !array.some((e, i, a) => !callback(e, i, a));
};

module.exports = {
  any,
  none,
};
