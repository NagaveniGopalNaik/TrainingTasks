// A bartender is writing a simple program to determine whether he should serve drinks to SVGComponentTransferFunctionElement. He only serves drinks to people 18 and older and when he's not on break.
function checkService(age, bartenderStatus){
    if(age >= 18 && bartenderStatus != 'true'){
        return true;
    } else {
        return false;
    }
}

let age = +prompt("Enter the customer age");
let bartenderStatus =prompt("Is bartender in break (true / false)");
console.log(`Bar service status ${checkService(age, bartenderStatus)}`);