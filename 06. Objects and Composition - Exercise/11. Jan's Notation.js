function jan(input) {
    let numbers = [];
    let result = 0;
    let operators = [];

    for (let line of input) {
        if (isNaN(line)) {
            line = line;
            operators.push(line);
        } else {
            line = Number(line);
            numbers.push(line);
        }
    }

    for (let operator of operators) {
        switch (operator) {
            case "+":
                if (numbers.length >= 2) {
                    let a = numbers[numbers.length - 2];
                    let b = numbers[numbers.length - 1];
                    result = a + b;
                    numbers.splice(-2, 2);
                    numbers.push(result);
                    if (numbers.length == 1) {
                        console.log(numbers.join(''));
                        break;
                    }
                    if (numbers.length > 1 && operators.length > 1) {
                        break;
                    } else if (operators.length == 1) {
                        console.log("Error: too many operands!");
                        break;
                    }
                } else {
                    console.log("Error: not enough operands!");
                }
                break;
            case "-":
                if (numbers.length >= 2) {
                    let c = numbers[numbers.length - 2];
                    let d = numbers[numbers.length - 1];
                    result = c - d;
                    numbers.splice(-2, 2);
                    numbers.push(result);
                    if (numbers.length == 1) {
                        console.log(numbers.join(''));
                        break;
                    }
                    if (numbers.length > 1 && operators.length > 1) {
                        break;
                    } else if (operators.length == 1) {
                        console.log("Error: too many operands!");
                        break;
                    }
                } else {
                    console.log("Error: not enough operands!");
                }
                break;
            case "*":
                if (numbers.length >= 2) {
                    let e = numbers[numbers.length - 2];
                    let f = numbers[numbers.length - 1];
                    result = Math.ceil(e * f);
                    numbers.splice(-2, 2);
                    numbers.push(result);
                    if (numbers.length == 1) {
                        console.log(numbers.join(''));
                        break;
                    }
                    if (numbers.length > 1 && operators.length > 1) {
                        break;
                    } else if (operators.length == 1) {
                        console.log("Error: too many operands!");
                        break;
                    }
                } else {
                    console.log("Error: not enough operands!");
                }
                break;
            case "/":
                if (numbers.length >= 2) {
                    let firstNum = numbers[numbers.length - 2];
                    let secondNum = numbers[numbers.length - 1];
                    result = Math.ceil(firstNum / secondNum);
                    numbers.splice(-2, 2);
                    numbers.push(result);
                    if (numbers.length == 1) {
                        console.log(numbers.join(''));
                        break;
                    }
                    if (numbers.length > 1 && operators.length > 1) {
                        break;
                    } else if (operators.length == 1) {
                        console.log("Error: too many operands!");
                        break;
                    }
                } else {
                    console.log("Error: not enough operands!");
                }
                break;
        }
    }
}

// jan([3,
//     4,
//     '+'
// ]);

// jan([5,
//     3,
//     4,
//     '*',
//     '-']
//    );

// jan([7,
//     33,
//     8,
//     '-'
// ]);

// jan([15,
//     '/']
//    );

// jan([31,
//     2,
//     "+",
//     11,
//     "/"]);

jan([-1,
    1,
    "+",
    101,
    "*",
    18,
    "+"])