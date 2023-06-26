// .......................................
// ..............Variable..................
// .......................................

// --Primitive Data Types--
/*  Number - Floating Point Numbers, for decimals and Integers.
    String - Sequence of charecters, used for text.
    Boolean - Logical data type that can be true or false.
    undefiend - Data type of a variable that does not have a value yet.
    nul - non-existent */

// You can only start a veriabe names with a letter, underscore or doller sign.
// And can't use any reserved keywords as a veriable names.

// create veriables
var firstName = "Dhishan";
var lastName ="Chathuranga";
var age = 29;
var isOk = true;
var job,hight;

// Print only veriable
console.log(firstName);

// Print the veriables with a String
console.log("My name is " + firstName + " " + lastName + ".");

// Type Coercian (Output print to convert String)
console.log("I am " + age +" yers old boy.");

console.log("It is " + isOk + ".");

console.log("I am a" + job);

// Get a veriable type
console.log(typeof(lastName));
console.log(typeof(firstName));
console.log(typeof(age));
console.log(typeof(isOk));
console.log(typeof(job));
console.log(typeof(hight));

// Define
job = "Software Engineer";
console.log("I am a " + job + ".");

// Variable Mutation
job = "UI UX Engineer"
console.log("I am a " + job + ".");

// Display an alert
alert("your age are "+ age + " years old. And am I right?" );

// Get user input
hight = prompt("What is your hight?");
alert("My hight is " + hight + " Feet.");
