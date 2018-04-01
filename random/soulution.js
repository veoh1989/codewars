// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20
// Note: array may be empty, in this case return 0.

function positiveSum(arr) {
  if(arr[0] === null) return 0
  let sum = arr.filter(x => x > -1).reduce((a, b) => a + b, 0)
  return sum
 }

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

// Sum all the numbers of the array (in F# and Haskell you get a list) except the highest and the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, even if there are more than one with the same value!)

// Example:
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// If array is empty, null or None, or if only 1 Element exists, return 0.

function sumArray(array) {
if(array === null || array === undefined) return 0;
if(array.length === 1 || array.length === 0) return 0;
let sorted = array.sort((a,b) => a-b)
let removeLarge = sorted.pop()
let removedSmall = sorted[0]

let sum = sorted.reduce((a,b) => a + b)
return sum - removedSmall
}

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

// You have to return the digits of this number within an array in reverse order.
// 348597 => [7,9,5,8,4,3]

function digitize(numbers) {
  return numbers.toString().split('').reverse().map(Number)
}

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.
// Test.assertEquals(number([[10,0],[3,5],[5,8]]),5);
let number = (busStops) =>{
  let totalPeople = 0

  for(let i=0; i < busStops.length; i++) {
    totalPeople += busStops[i][0] - busStops[i][1];
  }
  return totalPeople
}

// with using reduce

const number = busStops => busStops.reduce((people, stop) => people + stop[0] - stop[1], 0)

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

// You're given a sorted array of numbers. Write a function that will take that array and remove its duplicates.
// Do it in O(N) time
// Stretch: Do it without using a second array
//let arr = [5,4,3,2,2,1,1]

let removeDups = (arr) => newArray = arr.filter((ele, index, self) => index === self.indexOf(ele));

// let removeDups = (arr) =>
//     let newArray = arr.filter((ele, index, self) => {
//         return index === self.indexOf(ele);
//     });
//     return newArray
// }

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

// Write a function that takes in two linked lists as arguments, and returns one linked list that contains all the values zipped together:

// list1: [ 1 ] -> [ 2 ] -> [ 3 ]
// list2: [ 4 ] -> [ 5 ] -> [ 6 ]
// output: [ 1 ] -> [ 4 ] -> [ 2 ] -> [ 5 ] -> [ 3 ] -> [ 6 ]
// list1: [ 1 ] -> [ 2 ] -> [ 3 ]
// list2: [ 4 ] -> [ 5 ] -> [ 6 ] -> [ 7 ]
// output: [ 1 ] -> [ 4 ] -> [ 2 ] -> [ 5 ] -> [ 3 ] -> [ 6 ] -> [ 7 ]

// Do it with and without creating a new linked list.

let zipped = (listA, listB) => {
  let currentNodeA = listA.head
  let currentNodeB = listB.head
  let nextA = null
  let nextB = null

  while(currentNodeA.next || currentNodeB.next) {
    nextA = currentNodeA.next
    currentNodeA.next = currentNodeB
    currentNodeA = nextA
    nextB = currentNodeB.next
    currentNodeB.next = currentNodeA
    currentNodeB = nextB
  }
  return listA
}

//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

// Mumbling CodeWars
// accum("abcd");    // "A-Bb-Ccc-Dddd"
// accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt");    // "C-Ww-Aaa-Tttt"

let accum = (letters) => {
  let str = letters.toLowerCase().split('')
  for(let i=0; i < str.length; i++){
    str[i] = str[i].toUpperCase() + str[i].repeat(i)
  }
  return str.join('-')
}
//-----------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------

//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
// highAndLow("1 2 3 4 5"); // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

let highAndLow = (numbers) => {
  numbers = numbers.split(" ");
  return Math.max(...numbers) +" "+ Math.min(...numbers);
}
