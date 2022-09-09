// Write a function which checks given width and innerHeight, return true(landscape) if width is greater than height and vice versa
let checkWidthAndHeight = (width, height) => {
    return (width > height) ? true : false;
}


let width = +prompt("Enter width : ",0);
let height = +prompt("Enter height : ",0);

let result = checkWidthAndHeight(width,height);

if(result === true){
    alert(`Height : ${height} is less then width : ${width}`);
} else {
    alert(`Height : ${height} is greater then width : ${width}`);
}