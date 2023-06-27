// .......................................
// .....BMI Comparision..............
// .......................................

// var mass, hight, bmi;

// mass = prompt("What is your mass ? ");
// hight = prompt("What is your hight? ");

// bmi = mass/hight**2; 

// console.log("Your BMI is : "+ bmi);

// ...................................................................................

var mass, hight, bmiK, bmiN, isKasun;

// Kasun's BMI
mass = prompt("What is Kasun's mass :");
hight = prompt("What is Kasun's hight :");
bmiK = mass/hight**2;

// Nimal's BMI
mass = prompt("What is Nimal's mass :");
hight = prompt("What is Nimal's hight :");
bmiN = mass/hight**2;

// Display Borth BMIs
alert("Kasun BMI: " + bmiK + ". Nimals BMI: "+ bmiN + ".");

// comperisiom
isKasun = bmiK > bmiN;
alert("Kasun's BMI greater then Nimal's Bmi. It is " + isKasun + ".");