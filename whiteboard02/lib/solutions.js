'use strict';

exports.final = function finalNum(arr){
  if (!arr || !Array.isArray(arr) || arr.length < 2) return null;
  for (let i in arr) if (typeof arr[i] !== 'number') return null;
  let unique_array = Array.from(new Set(arr)).sort(function sortNumber(a,b) {
    return a - b;
  });
  return {
    max: Math.max(...unique_array),
    runnerUp: unique_array[unique_array.length -2]
  };
};

