function number(num) {
    num = Number(num);
    if (num < 100) {
        console.log("Less than 100");
    }
    if (num >= 100 && num <= 200) {
        console.log("Between 100 and 200");
    }
    if (num > 200) {
        console.log("Greater than 200");
    }
}

number("210");