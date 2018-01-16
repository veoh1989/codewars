'use strict';

var arr = [23, 23, 4, 4, 4,4, 4, 55, 62, 9, 12, 36, 97, 87, 65];

function solution() {
  let unique_array = Array.from(new Set(arr)).sort(function sortNumber(a,b) {
    return a - b;
  });
  return {
    max: Math.max(...unique_array),
    runnerUp: unique_array[unique_array.length - 2]
  };
}

solution();