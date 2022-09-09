// Write a function which returns the maximum of two numbers

function maximumNumber(number1,number2){
    return (number1 > number2) ? number1 : number2;
}

let number1 = +prompt("Enter first number",0);
let number2 = +prompt("Enter second number",0);
alert(`Maximum number in ${number1} and ${number2} is ${maximumNumber(number1,number2)}`);