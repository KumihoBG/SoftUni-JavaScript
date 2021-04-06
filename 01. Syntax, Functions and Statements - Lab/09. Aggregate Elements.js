function elements(input) {
    let sum = input.reduce((a, b) => a + b, 0);
    let inverse = input.reduce((a, b)=>a + 1 / b, 0);
    let result = '';
    for (let char of input) {
        result += char.toString();
    }
    console.log(sum);
    console.log(inverse);
    console.log(result);
}

elements([1, 2, 3]);