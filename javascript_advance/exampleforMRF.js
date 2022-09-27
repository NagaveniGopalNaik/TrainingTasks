let arr = [1,2,3,4,5];

//MAP EXAMPLES
//double the each elements
console.log(arr.map(ele => ele * 2));

//convert to binary
console.log(arr.map(element => element.toString(2)));

//FILTER EXAMPLES
//even element in a array
function evenElement(x){
    return x%2 ===0;
}
console.log(arr.filter(evenElement));

//odd elements in a array
function oddElement(x){
    return x%2;
}
console.log(arr.filter(oddElement));

//REDUCE EXAMPLES
//sum of the elements
const output = arr.reduce((sum,curr) => sum +=curr,0);
console.log(output);

//max element in the array
console.log(arr.reduce(function(max,curr){
    if(curr >max){
        max = curr;
    }
    return max;
},0));