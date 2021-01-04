// function calculator(numOne, numTwo, operator){
//     let result = 0;
//     switch(operator){
//         case "multiply": result = numOne * numTwo; break;
//         case "divide": result = numOne / numTwo; break;
//         case "add": result = numOne + numTwo; break;
//         case "subtract": result = numOne - numTwo; break;
//     }
//     console.log(result);
// }

function calculator(numOne, numTwo, operator) {
    switch (operator) {
        case "multiply":
            let multiply = (numOne, numTwo) => numOne * numTwo;
            console.log(multiply(numOne, numTwo)); break;
        case "divide":
            let divide = (numOne, numTwo) => numOne / numTwo;
            console.log(divide(numOne, numTwo)); break;
        case "add": let add = (numOne, numTwo) => numOne + numTwo;
            console.log(add(numOne, numTwo)); break;
        case "subtract": let substract = (numOne, numTwo) => numOne - numTwo;
            console.log(substract(numOne, numTwo)); break;
    }
}

calculator(5, 5, 'multiply');