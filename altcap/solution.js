function capitalize(string){
    var output = [];
    var output2 = [];
    for(var i = 0; i < string.length; i++){
        if (i % 2 != 0) {
            output += string[i].toLowerCase();
            output2 += string[i].toUpperCase();
        }
        else {
            output += string[i].toUpperCase();
            output2 += string[i].toLowerCase();
         }  
    var statement = output.toString();
    var statement2 = output2.toString();
    var statement3 = [statement, statement2]
    }
   return statement3;
}