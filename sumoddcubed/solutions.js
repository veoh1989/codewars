function cubeOdd(arr) {
    if (arr.reduce((non_numbers, cur_val) => non_numbers || typeof(cur_val) !== 'number', false)) {
      return undefined;
    }
  
    return arr.filter(odd => odd % 2).map(num => num * num * num).reduce((sum, cur) => sum + cur, 0);
  }
  