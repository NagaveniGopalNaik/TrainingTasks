alert( formatDate(new Date(new Date - 1)) ); // "right now"

alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// yesterday's date like 31.12.16 20:00
alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(date){
    let cDate = new Date() - date;
    // alert(cDate);

    
    if(cDate <1000){
        return "right now";
    };

    let sec = Math.floor(cDate/1000);
    if(sec<60){
        return sec+" sec. ago";
    };
    let minutes = Math.floor(cDate/(1000*60));
    if(minutes < 60){
        return minutes+" min. ago";
    };

    let year = date.getFullYear().toString().slice(-2);
    let month = date.getMonth();
    month  = month <10?'0'+month:month;
    let hour = date.getHours();
    hour = hour < 10?'0'+hour:hour;
    let minute = date.getMinutes();
    minute = minute < 10 ? '0'+minute:minute;
    let day = date.getDate();
    day = day<10?'0'+day:day;
     return `${day}.${month}.${year} ${hour}.${minute}`;
    
    

}