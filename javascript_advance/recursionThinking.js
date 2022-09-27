let user = { 
    name : "nagaveni",
    address : {
        personal : {
            city : "sirsi",
            area : "melinaonikeri"
        },
        office : {
            city : "udupi",
            area : {
                landmark : "santekatte"
            }
        }
    }
};

function MagicObject(obj,parent){
    let finalObject = {};
    for(let key in obj){
        if(typeof obj[key] === "object"){
            finalObject = Object.assign(finalObject,MagicObject(obj[key],parent+"_"+key));
        } else {
            finalObject[parent+"_"+key] = obj[key];
        }
    }
    
    return finalObject;
}

const output = MagicObject(user, "user");
console.log(output);
