function sum(a){
    return function(b){
        return a+b;
    }
};

alert(sum(2)(5));