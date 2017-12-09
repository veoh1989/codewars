function validatePIN (pin) {
    if (somepin =  /^[0-9]{4}$/g.test(pin) ) { 
     return somepin = true;
    }
    else if (somepin =  /^[0-9]{6}$/g.test(pin) ){
    return somepin = true;
    }
     else {
    return somepin = false;
    }
    }


    //I was looking forever how to use | but I see it now. So cool! 
    //Example of what should have been done (for personal use... lol) : return /^(\d{4}|\d{6})$/.test(pin)