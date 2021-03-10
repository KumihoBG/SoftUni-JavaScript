function solve(text, word) {
    let censored = '';
    while (censored.includes(word)){
        censored = text.replace(word, "*" .repeat(word.length));
    }
    console.log(text);
}

solve("A small sentence with some words", "small");