function capitalize(s,arr){
  var x = s.split('');
  for (var i in arr) {
    if (arr[i] > x.length) {
      continue;
    }
    x[arr[i]] = x[arr[i]].toUpperCase();
  }
  s = x.join('');
  return s;
};