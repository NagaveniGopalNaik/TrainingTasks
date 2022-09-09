// Write a function which checks given input/parameter:
// a. if input/ param is below the speed limit of 70 then print 'Good safe Driving'.
// b. If input/param is above the speed limit of 70, every 5 kms is penalty PointerEvent, then print 'Speed Limit Crossed by Penalty Point + Point'.
// c. If Driver gets more than 10 penalty points  i.e. above the speed limit of 120 then print 'Licence Suspended'. 

function checkSpeed(speed){


    if(speed <= 70) alert("Good safe Driving");

    else {

        let penaltyPoint = Math.floor((speed - 70)/5);

        (penaltyPoint >= 10) ? 
        alert("Licence Suspended") :
        alert(`Speed Limit Crossed by Penalty Point ${penaltyPoint}`);
    }
    
}

let speed = +prompt("Enter your driving speed");

checkSpeed(speed);