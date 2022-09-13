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

function checkString(obj){

        let str = "";
        for(let val of Object.values(obj)){
            if(typeof(val) === 'string'){
                str += val+"\n";
            }
            else if(typeof(val) === 'object'){
               str += checkString(val);
            }
        }
       
    return str;

}


console.log(checkString(student));
