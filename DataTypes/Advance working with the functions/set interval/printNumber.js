function printNumber(from, to){
    let current = from;

    let timeId = setInterval(function(){
        alert(current);
        if(current == to){
            clearInterval(timeId);
        }current++;
        
    },1000);
}

printNumber(5,10);