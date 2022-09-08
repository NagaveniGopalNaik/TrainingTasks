let salries = {
    "John" : 100,
    "Pete" : 300,
    "Mary" : 250
};

function topSalary(salries){

    let maxSalary = 0;
    let maxName = null;

    for(let [name,sal] of Object.entries(salries)){
        if(sal > maxSalary){
            maxSalary = sal;
            maxName = name;
        }
    }
 return maxName;
}

alert(topSalary(salries));