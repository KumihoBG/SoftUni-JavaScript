function extractSequence(input) {
    let result = [];
    let biggest = input[0];
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        if (current >= biggest) {
            result.push(current);
            biggest = current;
        }
    }
    return result;
}

console.log(extractSequence([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]));

console.log(extractSequence([20,
    3,
    2,
    15,
    6,
    1]
));

console.log(extractSequence([1,
    2,
    3,
    4]
));