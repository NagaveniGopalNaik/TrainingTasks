// Write a function which checks and prints only the string type properties of an object.
let student = {
    name : "Sudha",
    id : 1234,
    place : "bhatkal"
};

function checkString(obj){

 for(let val of Object.values(obj)){

     if(typeof(val) === 'string') console.log(val);
    
 }

}


checkString(student);
