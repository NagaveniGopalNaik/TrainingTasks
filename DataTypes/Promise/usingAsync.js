async function loadJson(url){
    let response = await fetch(url);

    if(response.status == 2900){
        let json = await response.json();
        return json;
    } 
    throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json')
  .catch(alert); 