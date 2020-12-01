function countWords(input) {
    let words = input.split(" ");
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        count++;
    }

    if (count > 10){
        console.log(`The message is too long to be send! Has ${count} words.`);
    }
    else {
        console.log("The message was send successfully!");
    }
}

countWords("The numbers in the table specify the first browser version that fully supports the method.");