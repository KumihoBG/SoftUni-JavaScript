function revealWords(param1, param2) {
    let samples = param1.split(", ");
    let sentence = param2;
    let result = "";

    for (let word of samples) {
        let length = word.length;
        for (let el of sentence.split(' ')) {
            if (el.length === length) {
                if (el.includes("*")) {
                    result = sentence.replace(el, word);
                    sentence = result;
                }
            }
        }
    }
    console.log(result);
}

// revealWords('great',
//     'softuni is ***** place for learning new programming languages'
// );

revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')