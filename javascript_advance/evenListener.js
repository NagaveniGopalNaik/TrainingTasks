const btn = document.getElementById("btn");
let count = 0;
btn.addEventListener("click" ,function xyz(){
    console.log("Button clicked" + ++count);
});