function solution(str){
    let revarr = [];
    let arr = str.split('');
    for(let i of arr) {
        revarr.unshift(i);
    }
    return revarr.join('');
  }
 solution('world')