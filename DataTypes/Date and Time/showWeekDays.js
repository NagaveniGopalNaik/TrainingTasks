let date = new Date(2012,0,3);
alert(getWeekDay(date));

function getWeekDay(date){
    let days = ['SU', 'MO', 'TU', 'TH', 'FR', 'SA'];
     return days[date.getDay()];
}