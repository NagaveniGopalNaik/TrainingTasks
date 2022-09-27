const users = [
    {firstName : "akshay" , lastName : "saini", age : 26},
    {firstName : "donald" , lastName : "trump", age : 75},
    {firstName : "don", lastName : "musk", age : 50},
    {firstName : "depika",lastName : "padukone", age : 26}
];

//using map
//find the full name of the users
const output = users.map(user => user.firstName + " " + user.lastName);
console.log(output);

//using filter
//find the list who have more than 30 year 
const output1 = users.filter(user => user.age > 30).map(user => user.firstName);
console.log(output1);

//create a collection of age with frequency of users
const output2 = users.reduce(function(acc,curr){
    if(acc[curr.age]){
        acc[curr.age] = ++ acc[curr.age];
    } else {
        acc[curr.age] = 1;
    }
    return acc;
},{});
console.log(output2);

//using reduce function find the first name who have more than 30 year age in the users
output4 = users.reduce(function(acc,curr){
    if(curr.age > 30){
        acc.push(curr.firstName);
    }
    return acc;
},[]);
console.log(output4);