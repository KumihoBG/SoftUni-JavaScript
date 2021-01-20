function factorialDivision(numberOne, numberTwo) {
    let resultOne = calculateFactorial(numberOne);
    let resultTwo = calculateFactorial(numberTwo);
    let result = (resultOne / resultTwo).toFixed(2);

    function calculateFactorial(num) {
        let factorial = 1;
        for (let i = num; i >= 2; i--) {
            factorial *= i;
        }
        return factorial;
    }
    return result;
}

console.log(factorialDivision(6, 2));