function cookingByNumbers(...params) {
    let number = Number(params.shift());
       
    for (let line of params) {
        if (line === "chop") {
            number /= 2 ;
        } else if (line === "dice") {
            number = Math.sqrt(number);
        } else if (line === "spice") {
            number++;
        } else if (line === "bake") {
            number *= 3;
        } else if (line === "fillet") {
            number *= 0.80;
        }
        console.log(number);
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');