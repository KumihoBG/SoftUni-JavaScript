function melrah(input) {
    let randomStr = input.shift();
    let pattern = input.shift();

    while (pattern.length > 0) {
        let firstMatch = randomStr.indexOf(pattern);
        let lastMatch = randomStr.lastIndexOf(pattern);
        if ((firstMatch > -1 && lastMatch > -1) && firstMatch !== lastMatch) {
            randomStr = randomStr.split('');
            randomStr.splice(firstMatch, pattern.length);
            randomStr = randomStr.join('');
            lastMatch = randomStr.lastIndexOf(pattern);
            randomStr = randomStr.split('')
            randomStr.splice(lastMatch, pattern.length)
            let removeFromPatt = pattern[Math.floor(pattern.length / 2)]
            pattern = pattern.replace(removeFromPatt, '');
            randomStr = randomStr.join('')
            console.log('Shaked it.');
        } else {
            break;
        }
    }
    console.log('No shake.');
    console.log(randomStr);
}

melrah(['astalavista baby', 'sta', '']);
console.log('--------------');
melrah(['##mtm!!mm.mm*mtm.#', 'mtm', '']);