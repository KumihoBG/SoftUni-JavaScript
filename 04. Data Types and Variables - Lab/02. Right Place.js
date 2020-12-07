function rightPlace(str, char, result){
    let word = str.replace("_", char);
    if (word === result){
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');