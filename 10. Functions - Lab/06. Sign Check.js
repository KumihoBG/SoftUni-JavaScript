function signChec(num1, num2, num3) {
    if((num1 < 0 && num2 > 0 && num3 > 0) ||
       (num1 > 0 && num2 < 0 && num3 > 0) ||
       (num1 > 0 && num2 > 0 && num3 < 0) ||
       (num1 < 0 && num2 < 0 && num3 < 0)) {
        console.log('Negative');
    } else if(num1 == 0 || num2 == 0 || num3 == 0) {
        console.log("Positive");
    } else {
        console.log('Positive');
    }
}

// signChec(5, 12, -15);
signChec(-6, -12, 14);
