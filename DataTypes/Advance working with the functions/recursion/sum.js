function sumTo(val){
    
    
    if(val == 1){
        return 1;
    } else {
        return val + sumTo(val - 1);
    }
    
}


let val = +prompt("Enter the value",0);
let res = sumTo(val);

alert(res);

