function sumArray(array) {
if(array === null || array === undefined) return 0;
if(array.length === 1 || array.length === 0) return 0;
let sorted = array.sort((a,b) => a-b)
let removeLarge = sorted.pop()
let removedSmall = sorted[0]

let sum = sorted.reduce((a,b) => a + b)
return sum - removedSmall
}
