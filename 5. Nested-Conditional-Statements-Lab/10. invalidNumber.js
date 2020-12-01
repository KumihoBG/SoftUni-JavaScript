function validNumber(arg) {
    let number = Number(arg);
    let isValid = number >= 100 && number <= 200 || number === 0;

    if (!isValid) {
        console.log('invalid');
    }
}

// validNumber("75");
// validNumber("150");
// validNumber("-1");
// validNumber("100");
// validNumber("220");
// validNumber("199");
// validNumber("0");
validNumber("200");