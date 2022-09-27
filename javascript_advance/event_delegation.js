document.querySelector("#category")
.addEventListener('click', (e) =>{
    console.log(e.target.id);
});
//convert lower case to upper case
document.querySelector("#name")
.addEventListener('keyup', (e) =>{
    console.log(e);
    if(e.target.dataset.uppercase != undefined){
        e.target.value = e.target.value.toUpperCase();
    }
});

