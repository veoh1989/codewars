var arr = [1, 76, 45, 123, 13];
function challenge (array) {
  let avg = array.reduce((a, b) => a + b)/array.legnth;
  let lowest = array.sort(function(a, b){return a-b})[0];
  let highest = array.sort(function(a, b){return a-b})[array.length-1];
  return {
    avg: avg,
    highest: highest,
    lowest: lowest};
}

challenge(arr);