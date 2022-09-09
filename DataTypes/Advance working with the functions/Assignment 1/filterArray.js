// 

function studentRankingName(array,year1){
    let result = [];
   for(let val in array){
       if(array[val].year == year && array[val].ranking>=4){
           result.push(array[val]);
       } 
   }
  result.sort((a,b) => a.name > b.name ? 1 : -1);
  
      for(let index in result){
            console.log(result[index].name);
      }
  


   
    
}
    

const studentsArray = [
    {name:'Suraj',year:2019,ranking:9},
    {name:'Amit', year:2019,ranking:5},
    {name:'Akash',year:2018,ranking:4},
    {name:'Dinanath',year:2019,ranking:3},
    {name:'Sagar',year:2017,ranking:3}
];

let year = +prompt("Enter year");
studentRankingName(studentsArray,year);
