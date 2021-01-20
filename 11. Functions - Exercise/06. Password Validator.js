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
    for (let j = 0; j < chars.length; j++){
        let currChar = chars[j];
        if (hasDigits == true || currChar.toUpperCase() != currChar.toLowerCase() || currChar.codePointAt(0) > 127) {
            isInvSymbol = false;
        } else {
            isInvSymbol = true;
            break;
        }
    }

    if (isValid == true && isInvSymbol == false && hasDigits == true) {
        console.log('Password is valid');
    } else {
        if (pass.length < 6|| pass.length >= 10) {
            isValid = false;
            console.log('Password must be between 6 and 10 characters');
        }
    
        if (isInvSymbol == true && hasDigits == false && isValid == false) {
            console.log('Password must consist only of letters and digits');
        }

        if (isValid == false){
            console.log('Password must have at least 2 digits');
        }
    }   
}

passwordValidation('logIn');
console.log('-----------------');
passwordValidation('MyPass123');
console.log('-----------------');
passwordValidation('Pa$s$s');