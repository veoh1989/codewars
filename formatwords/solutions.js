function formatWords(words){
    if (words === null)
      return "";
      
    var index;
    index = words.indexOf("");
    while (index > -1){
      words.splice(index, 1);
      index = words.indexOf("");
    }
        
    if (words.length < 2){
      return words.join("");
    }
      
    if (words.length === 2){
      return words.join(" and ");
    }
    
    if (words.length > 2){
     for(var i = 0; i < words.length-2; i++){
        words[i] = words[i] + ", ";
     }
      words[words.length-2] = words[words.length-2] + " and ";
      result = words.join("");
      return result;
      }
    }