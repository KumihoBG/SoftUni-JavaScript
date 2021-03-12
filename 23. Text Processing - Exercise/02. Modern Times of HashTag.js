function hashTag(str) {
    let newWord = "";
    let sentence = str.split(' ');


    for (let word of sentence) {
        let test = /\d/.test(word);

        if (word.startsWith("#") && word.length > 1 && test == false){
            newWord = word.split("#")[1];
            console.log(newWord);
        }
    }
}

// hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');
hashTag('Nowaday222s everyone uses # to tag a #special211 word in #socialMedia');