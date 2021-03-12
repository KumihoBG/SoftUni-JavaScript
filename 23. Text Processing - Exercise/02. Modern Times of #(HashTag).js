function hashTag(str) {
    for (let word of str) {
        if (word.startsWith("#")){
            let newWord = word.split("#")[1];
            console.log(newWord);
        }
    }
}

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')