let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
  ];

  users.sort(byField('name'));
  console.log(users);
users.sort(byField('age'));

// function byField(a){
//     return function(b){
//         return (a > b)?1:-1;
//     }
// };

function byField(fieldName){
    return (a,b) => a[fieldName] > b[fieldName] ? 1:-1;
}

console.log(users);