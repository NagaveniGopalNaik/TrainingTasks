function getSecondTomorrow(){
    let now = new Date();
    let res = (24*3600 + 60*60 * 60)-(now.getHours() *3600 +now.getMinutes() * 60 + now.getSeconds());
    return res;
}

alert(getSecondTomorrow());