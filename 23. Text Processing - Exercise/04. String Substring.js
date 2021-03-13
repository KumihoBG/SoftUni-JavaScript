function subStr(word, str) {
    str = str.toLowerCase().split(' ');
    
    if (str.includes(word.toLowerCase())) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }
}

subStr('javascript',
    'JavaScript is the best programming language');

subStr('python',
    'JavaScript is the best programming language');