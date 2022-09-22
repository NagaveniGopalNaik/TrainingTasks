function outset(){
    var c = 20;
    function outer(b){
        function inner(){
            console.log(a,b,c);
        }
        return inner;
    }
    let a = 10;
    return outer;
}

var close = outset()("helloworld");
close();