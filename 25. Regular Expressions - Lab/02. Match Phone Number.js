function matchPhoneNumber(params) {
    let validNumbers = [];
    let pattern = /[+][359]+([ ]|[-])[2]\1[0-9]{3}\1[0-9]{4}\b/g;
    let validNumber;
    while (validNumber = pattern.exec(params)) {
        validNumbers.push(validNumber[0]);
    }
    console.log(validNumbers.join(', '));
} 