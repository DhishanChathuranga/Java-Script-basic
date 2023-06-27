// .......................................
// .........Comparison Operators...........
// .......................................

var a = 20;
var b = "20";
var c = 5;
var d = 15;

// Equal to
if(a===b){ // ==
    // Equal to value and Equal type
    if(a===b){
        console.log("Borth value and type of a equal to b");
    }
    else if(a !== b){
        console.log("Only value or type of a equal to b");
    }
}

// Greater than or equal
else if(a == 10){   // >=
    if(a > 10){
    // Greater than 
    console.log("a is greater than 10");
    }
    else if(a == 10){
    // Equal top
    console.log("a is equal to 10");
    }
}

// Not Equal
else if(a == c){ // !=
    // less then
    if(a < c){
        console.log("a is less than c");
    }
    // Greater then
    if(a > c){
        console.log("a is Greater than c");
    }
}

else{
    // Less than or equal to
    if(c <= d){
        // if(c <= 5){
        //     console.log("c is Less than equal to 5");
        // }
        // else{
        //     console.log("c is greater than 5");
        // }

        // Ternary Operater
        c <= 5 ? console.log("c is Less than equal to 5") : console.log("c is greater than 5");
    }

}

