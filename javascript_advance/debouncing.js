let count = 0;
let getData = () =>{
    console.log("Fetching data" + count++);
};

const debounce = function(fn, d){
    let timer;
    return function(){
        let context = this;
        args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context,args);
        },d);
    }
};

const betterFunction = debounce(getData,300);
