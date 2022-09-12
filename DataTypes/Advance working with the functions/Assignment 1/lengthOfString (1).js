// Write a recursive function that returns the length of a String.
function lengthOfString(string){
    if(string == ""){
        return 0;
    } else {
        return lengthOfString(string.substring(1)) + 1;
    }
  
}

let string = prompt("Enter the string");
console.log(`The length of the ${string} is ${lengthOfString(string)}`);