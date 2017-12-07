function insertDash(num) {
   let newArr=num.toString().split(“”);
  for(i=0; i<newArr.length; i++){
  if((newArr[i]%2==1) && (newArr[i+1]%2==1) ){
  newArr.splice(i+1, 0, “-”);
  newArr.length++;
  }
  }

   return newArr.join(‘’);
}
