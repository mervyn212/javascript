let myNumber1 =10;
if (myNumber1 > 0)
{
console.log('no. is positive');
}
else
{
    console.log('no is negative');
    
}
let dayOfWeek ='Wednesday';
switch (dayOfWeek){
    case 'Monday':
    console.log('its Monday!');
    break;
    case 'Tuesday':
        console.log('its Tuesday');
        break;
        case 'Wednesday':
            console.log('its Wednesday');
            break;
            default:
            console.log('some random day');
}
let MyName = prompt("What is your name?");
console.log(MyName);
//* javascript written by Mervyn Rai M23W0349
let number = prompt("enter number:");
if(number % 2 === 0){
console.log('no. is even');
}else{
console.log('no. is odd');
}

//* javascript written by Mervyn Rai M23W0349
let grade = prompt("enter marks");
let letterGrade;
switch(true){
case(grade >=90 && grade <=100):
letterGrade = 'A';
break;
case(grade >=80 && grade <=89):
letterGrade = "B";
break;
case(grade >=70 && grade <=79):
letterGrade ="C";
break;
case(grade >60 && grade <=69):
letterGrade ="D";
break;
default:
letterGrade ="F";
}
console.log("Your letter grade is: " + letterGrade);






let grades = prompt("Enter your grade (0-100):");
let letter_grade;


if (grades >= 90 && grades <= 100)
    letter_grade = "A";
else if (grades >= 80 && grades < 90)
    letter_grade = "B";
else if (grades >= 70 && grades < 80)
    letter_grade = "C";
else if (grades >= 60 && grades < 70)
    letter_grade = "D";
else
    letter_grade = "F";

console.log("Your letter grade is: " + letter_grade); 