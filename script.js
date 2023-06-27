// .......................................
// ..............Switch Case..............
// .......................................

var empName = 'Dhishan';
var jobRole = 'Professor';

switch(jobRole.toLocaleLowerCase()){
    case 'teacher' :
        console.log(empName + " is a teacher.");
        break;
    case 'doctor' :
        console.log(empName + " is a " + jobRole);
        break;
    case 'professor':
    case 'software engineering' :
        console.log(empName + " is a " + jobRole);
        break;
    default:
        console.log(empName + " is something else.");
        break;
}

// ---------------------------------------------------------------------
var age = 25;

switch(true){
    case age < 20 :
        console.log(empName + ' is under age.');
        break;
    case 20 < age < 30  :
        console.log(empName + ' is young age.');
        break;
    case 30 < age < 40 :
        console.log(empName + ' is middle age.');
        break;
    default:
        console.log(empName + ' is too old.');
}