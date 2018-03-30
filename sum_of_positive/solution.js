function positiveSum(arr) {
  if(arr[0] === null) return 0
  let sum = arr.filter(x => x > -1).reduce((a, b) => a + b, 0)
  return sum
 }
