// Write a function which prints/shows statusbar(or any pattern) for the number of times and rows provided.


function printStar(value){
    let string = "";
    for(let i =1;i<=value;i++){

        for(let j=1;j<=i;j++){

            string += "*\t";
            
    
        }
        string +="\n";
    }
    return string;
}

let value = +prompt("Enter the value: ", 0);
console.log(printStar(value));