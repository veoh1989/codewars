function isNice(arr) {
    let boo = true;
    if (arr.length > 0) {
         for (var i = 0; i < arr.length; i++) {
            let j = arr[i];
           console.log(arr[i-1])
            if (!(arr.includes(j-1) || arr.includes(j+1))) {
              boo=false;
        } 
         }
    } else {
          return false;
    }
      return boo;
    };