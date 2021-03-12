function hashTag(str) {
    let newWord = "";
    let sentence = str.split(' ','#');

    for (let word of sentence) {
        if (word.startsWith("#")){
            newWord = word.split("#")[1];
        }
    }
}

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');