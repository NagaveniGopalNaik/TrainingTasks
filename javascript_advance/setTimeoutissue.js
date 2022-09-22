console.log("start");

setTimeout(function cb(){
    console.log("callback");
}, 5000);
console.log("End");

let startDate = new Date().getDate();
let endDate = startDate;

while (endDate < startDate + 10000){
    endDate = new Date().getDate();
}
console.log("While expires");