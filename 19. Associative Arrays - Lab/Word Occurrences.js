function wordOccurrences(input) {
    let words = {};
    let initialValue = 1;

    for (const line of input) {
        let word = line.split(',').toString();
        if (words.hasOwnProperty(word)){
            words[word] = words[word] + 1;
        } else {
            words[word] = initialValue;
        }
    }
    let sortedObj = Object.entries(words).sort((a, b) => b[1] - a[1]);
    
    for (const kvp of sortedObj) {
        console.log(`${kvp[0]} -> ${kvp[1]} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);