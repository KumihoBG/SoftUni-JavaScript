function solve(text, word) {
    let indexOfMatch = text.indexOf(word);

    while (indexOfMatch !== -1) {
        text = text.replace(word, "*" .repeat(word.length));
        indexOfMatch = text.indexOf(word, indexOfMatch + 1);
    }
    console.log(text);
}

solve("A small sentence with some words", "small");