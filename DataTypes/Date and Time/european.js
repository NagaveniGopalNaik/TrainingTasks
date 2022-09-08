let date = new Date(2012, 0, 8);  // 3 Jan 2012
alert( getLocalDay(date) );  

function getLocalDay(date){
    let day = date.getDay();

    if(day == 0){
        day = 7;
    }
    return day;
}