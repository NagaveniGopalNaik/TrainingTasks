let length = +prompt("Enter the array size ");
let array = [];
for(let i = 0;i<length; i++){
    prompt("Enter the elements");
    array[i]= prompt("");
    
}

// let array = [1,2,3,4,5,6];
let val = +prompt("Enter value",0);

alert(includes(array,val));

function includes(array, val){
    for(let element of array){
        if(element == val){
            return `${val} is in the array of ${array}`;
            
        }
    }
            return `${val} is not in the array of ${array}`;
        
};