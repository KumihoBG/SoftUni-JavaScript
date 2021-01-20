function passwordValidation(pass) {
    let chars = pass.toString().split("");
    let digits = 0;
    let isValid = false;
    let isInvSymbol = false;
    let hasDigits = false;

    // Checks if the char is a num and if it has 2 digits at least
    for (let i = 0; i < chars.length; i++) {
        let current = Number(chars[i]);
        if (Number.isInteger(current)) {
            digits++;
            if (digits >= 2) {
                hasDigits = true;
            }
        }
    }

    // Checks if a char is letter or digit only
    for (let j = 0; j < chars.length; j++) {
        let currChar = chars[j];
        if ((currChar.charCodeAt() >= 48 && currChar.charCodeAt() <= 57) || (currChar.charCodeAt() >= 65 && currChar.charCodeAt() <= 90) || (currChar.charCodeAt() >= 97 && currChar.charCodeAt() <= 122)) {
            isInvSymbol = false;
        } else {
            isInvSymbol = true;
            break;
        }
    }
    if (pass.length < 6 || pass.length > 10) {
        isValid = false;
    } else {
        isValid = true;
    }
    if (isValid == true && isInvSymbol == false && hasDigits == true) {
        console.log('Password is valid');
    }
    if (isValid == false) {
        console.log('Password must be between 6 and 10 characters');
    }

    if (isInvSymbol == true) {
        console.log('Password must consist only of letters and digits');
    }

    if (hasDigits == false) {
        console.log('Password must have at least 2 digits');
    }
}

// ----------------------------------------------

function passwordValidation(pass) {
    let chars = pass.toString().split("");
    let digits = 0;
    let isValid = false;
    let isInvSymbol = true;
    let hasDigits = false;
 
    // Checks if the char is a num and if it has 2 digits at least
    for (let i = 0; i < chars.length; i++) {
        let current = Number(chars[i]);
        if (Number.isInteger(current)) {
            digits++;
            if (digits < 2) {
                isValid = false;
            } else {
                isValid = true;
                hasDigits = true;
            }
        }
    }
 
    // Checks if a char is letter or digit only
    for (let j = 0; j < chars.length; j++) {
        let currChar = chars[j];
        let asciiChar = currChar.toUpperCase().charCodeAt()
        let isNumber = asciiChar >= 48 && asciiChar <= 57;
        let isChar = asciiChar >= 65 && asciiChar <= 90;
        if (isNumber || isChar) {
            isInvSymbol = false;
        } else {
            isInvSymbol = true;
            break;
        }
    }
 
    if (isValid == true && isInvSymbol == false && hasDigits == true) {
        console.log('Password is valid');
    } else {
        if (pass.length < 6 || pass.length >= 10) {
            isValid = false;
            console.log('Password must be between 6 and 10 characters');
        }
 
        if (isInvSymbol) {
            console.log('Password must consist only of letters and digits');
        }
 
        if (isValid == false) {
            console.log('Password must have at least 2 digits');
        }
    }
}

passwordValidation('logIn');
console.log('-----------------');
passwordValidation('MyPass123');
console.log('-----------------');
passwordValidation('Pa$s$s');

//--------------------------------------------------

function solve(password) {
 
    let passIsValid = true;
 
    let checkIfPasswordIsBetween6And10CHar = pass => {
        let lengthPass = pass.length;
        if (lengthPass < 6 || lengthPass > 10) {
            console.log('Password must be between 6 and 10 characters');
            passIsValid = false;
        }
    }
 
    let checkIfPasswordIsOnlyDigitAndLetters = pass => {
        for (let i = 0; i < pass.length; i++) {
            let currChar = pass[i];
            let isNotCorrect = true;
            let charToAsciiNum = currChar.charCodeAt();
            let digits = charToAsciiNum >= 48 && charToAsciiNum <= 57;
            let lowChar = charToAsciiNum >= 65 && charToAsciiNum <= 90;
            let bigChar = charToAsciiNum >= 97 && charToAsciiNum <= 122;
 
            if (digits || lowChar || bigChar) {
                isNotCorrect = false;
            }
            if (isNotCorrect) {
                console.log('Password must consist only of letters and digits');
                passIsValid = false;
                return;
            }
        }
    }
 
    let checkIfPasswordHaveAtLeast2Digits = pass => {
        let count = 0;
        for (let i = 0; i < pass.length; i++) {
            let currChar = pass[i];
            charToAsciiNum = currChar.charCodeAt();
            let digits = charToAsciiNum >= 48 && charToAsciiNum <= 57;
 
            if (digits) {
                count++;
            }
        }
        if (count < 2) {
            console.log('Password must have at least 2 digits');
            passIsValid = false;
        }
    }
 
    let checkIfPassIsValid = pass => {
 
        checkIfPasswordIsBetween6And10CHar(pass);
        checkIfPasswordIsOnlyDigitAndLetters(pass);
        checkIfPasswordHaveAtLeast2Digits(pass);
 
        if (passIsValid) {
            console.log('Password is valid');
        }
    }
 
    checkIfPassIsValid(password);
 
}
 
 
solve('Pa$s$s')