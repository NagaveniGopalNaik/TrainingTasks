function* pseudoRandom(number){
    let val = number;
    while(true){
        val = val * 16807 % 2147483647;
        yield val;
    }
}

let generator = pseudoRandom(1);

alert(generator.next().value); // 16807
alert(generator.next().value); // 282475249
alert(generator.next().value); // 1622650073