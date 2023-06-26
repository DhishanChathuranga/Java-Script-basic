// .......................................
// .....Arithmetic Operators..............
// .......................................

// -- Single Operators --

var myAge, yourAge, year, result;
myAge = 29;
yourAge = 20;
year = 2023;

// Substraction
result = year - myAge;
console.log("I was born in " + result);

// Addition
result = myAge + 10;
console.log("After 10 yers my age " + result);

// Multiplication
result = myAge * yourAge;
console.log("Multiplication your age and my age " + result);

// Division
console.log("Division of our ages " + (myAge / yourAge));

// Modulus
console.log("Modulus of our ages " + (myAge % yourAge));

// Exponentiation
console.log("Exponent of my age " + (myAge**2));
console.log("Exponent of my age " + (myAge**3));


//--- Increment--- 
// Post Increment
console.log(myAge++);
console.log("Post Increment my age " + myAge);

// Pre Increment
console.log(++myAge);
console.log("Pre Increment my age " + myAge);

//--- Decrement--- 
// Post Decrement
console.log(myAge--);
console.log("Post Decrement my age " + myAge);

// Pre Decrement
console.log(--myAge);
console.log("Pret Decrement my age " + myAge);

//-- Operator Precedence -- 
var cal = (((1/4)+(1/4))*4)**3;
console.log(cal);

// Multiple Operators
var ans1, ans2;
ans1 = ans2 = (((1/4)+(1/4))*4)**3 + 5;
console.log(ans1);




