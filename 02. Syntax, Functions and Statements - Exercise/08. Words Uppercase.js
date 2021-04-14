function wordsUpperCase(input) {
    let output = [];
    let pattern = /\b\w+\b/g;
    let result = pattern.exec(input);

    while (result !== null) {
        let current = result[0].toUpperCase();
        output.push(current);
        result = pattern.exec(input);
    }

    console.log(output.join(', '));
}

wordsUpperCase('Hi, how are you?');