let year = +prompt("Enter year",2323);
let month = +prompt("enter month in 0-11 (jan-dec)",0);
alert(getLastDayOfMonth(year,month));


function getLastDayOfMonth(year,month){
   let date = new Date(year,month+1,0);
   // alert(new Date());
   return date.getDate();
}