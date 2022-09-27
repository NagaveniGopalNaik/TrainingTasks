// let grandParent = document.querySelector("#grandparent");
// if (grandParent){
//     grandParent.addEventListener('click', () => {
//         console.log("grandparent clicked");
//     },true);//capturing
// }

//   let parent = document.querySelector('#parent')
//   if(parent){
//     parent.addEventListener('click', () => {
//         console.log("parent clicked");
//     },true);//capturing
//   }

//   let child = document.querySelector('#child')
//   if(child){
//     child.addEventListener('click', () => {
//         console.log("child clicked");
//     },true);//capturing
//   };

//Bubbling

// let grandParent = document.querySelector("#grandparent");
// if (grandParent){
//     grandParent.addEventListener('click', () => {
//         console.log("grandparent clicked");
//     },false);//bubbling
// }

//   let parent = document.querySelector('#parent')
//   if(parent){
//     parent.addEventListener('click', () => {
//         console.log("parent clicked");
//     },false);//bubbling
//   }

//   let child = document.querySelector('#child')
//   if(child){
//     child.addEventListener('click', () => {
//         console.log("child clicked");
//     },false);//bubbling
//   };


//stop propogation

let grandParent = document.querySelector("#grandparent");
if (grandParent){
    grandParent.addEventListener('click', (e) => {
        console.log("grandparent clicked");
        // e.stopPropagation();
    },true);//capturing
}

  let parent = document.querySelector('#parent')
  if(parent){
    parent.addEventListener('click', (e) => {
        console.log("parent clicked");
        e.stopPropagation();
    },true);//capturing
  }

  let child = document.querySelector('#child')
  if(child){
    child.addEventListener('click', () => {
        console.log("child clicked");
    },true);//capturing
  };