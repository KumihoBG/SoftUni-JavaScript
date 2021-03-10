function countStrings(text, word){
    console.log(text.split(' ')
    .filter(el => el == word).length);
}

countStrings("This is a word and it also is a sentence","is");