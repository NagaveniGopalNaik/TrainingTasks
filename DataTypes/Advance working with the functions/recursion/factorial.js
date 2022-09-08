let factorial = (val) => {
    if (val == 1){
        return 1;
    } else {
        return val * factorial(val-1);
    }
}



let val = +prompt("Enter the value");
alert(factorial(val));