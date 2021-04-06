function squareStars(input) {
    let symbol = '* ';
    let result = '';

    for (let i = 0; i < input; i++) {
        result = symbol.repeat(input);
        console.log(result);
    }
}

squareStars(2);