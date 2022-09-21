// Write a function which checks and prints only the string type properties of an object.
let student = {
    department : {
        name : "cse",
        id : 123,
        language : {
            name : "java",
            name2 : "python"
        }
    },
    name : "Sudha",
    id : 1234,
    place : "bhatkal",
    
};
let start = Date.now();
let str = "";
function checkString(obj){

        for(let val of Object.values(obj)){
            if(typeof(val) === 'string'){
                str += val+"\n";
            }
            else if(typeof(val) === 'object'){
               checkString(val);
            }
        }
   
    return str;

}


console.log(checkString(student));
let diff = Date.now();
alert(diff - start);
