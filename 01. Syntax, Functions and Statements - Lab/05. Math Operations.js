function mathOperations(...params) {
    let a = Number(params[0]);
    let b = Number(params[1]);
    let operator = params[2];
    let result = 0;

    switch(operator) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = a / b; break;
        case "%": result = a % b; break;
        case "**": result = a ** b; break;
    }

    console.log(result);
}

mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');