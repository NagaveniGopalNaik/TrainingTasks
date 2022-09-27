function multifly(x,y){
    return x * y;
};

const multflyByTwo = multifly.bind(this,2);
console.log(multflyByTwo(5));

const multflyByThree = multifly.bind(this,3);
console.log(multflyByThree(5));

//usning closure
function addition(x){
    return function(y){
         console.log(x+y);;
    }
}
const additionfive = addition.call(this,5);
let val = additionfive(3);
// console.log(val());
// console.log(additionfive(67));


