function pascalCaseSplit(str) {
    let result = str.match(/[A-Z][a-z]+/g);
    console.log(result.join(", "));
}

function pascalCase(str) {
    let result = [];
    let index = 0;
    for (let i = 1; i < str.length; i++) {
        if (str[i].charCodeAt() >= 60 && str[i].charCodeAt() <= 90) {
            let word = str.substring(index, i);
            result.push(word);
            index = i;
        }
 
    }
    result.push(str.substring(index, str.length))
    console.log(result.join(', '));
}

pascalCase('SplitMeIfYouCanHaHaYouCantOrYouCan');
// pascalCase('ThisIsSoAnnoyingToDo');