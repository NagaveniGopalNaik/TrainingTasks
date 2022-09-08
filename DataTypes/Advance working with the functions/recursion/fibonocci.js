function fibonocci(val){
    if(val == 1 || val == 2){
        return 1;
    } else {
        return fibonocci(val-1) + fibonocci(val-2);
    }
}



let val = +prompt("Enter the value");
alert(fibonocci(val));