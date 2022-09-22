function x(){
    for(let i = 0;i < 10; i++){
        setTimeout(function(){
            console.log(i);
        }, i * 2000);
    }
    console.log("Namaste Javascript");
}
x();