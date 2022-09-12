// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

function convertSeconds(hour,minute){
    return hour * 3600 + minute * 60;
}

let hour = +prompt("Enter hour", 0);
let minute = +prompt("Enter minutes", 0);
console.log(`${hour} and ${minute} in seconds ${convertSeconds(hour,minute)}`);