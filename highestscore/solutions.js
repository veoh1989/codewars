function high(x){
    return x.split(' ')[x.split(' ').map(word => word.split('').reduce((score, letter) => score + letter.charCodeAt(0) - 96, 0)).reduce((largest_idx, cur_score, idx, arr) => cur_score > arr[largest_idx] ? idx : largest_idx, 0)];
  }