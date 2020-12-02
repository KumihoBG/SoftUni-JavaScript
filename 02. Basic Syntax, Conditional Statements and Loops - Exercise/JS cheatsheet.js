// Remove trailing zeroes
firstNum = parseFloat(firstNum.toFixed(secondNum));

// Factorial
function factorial(arg) {
    let num = Number(arg);
    let factorial = 1;

    for (let i = num; i >= 2; i--) {
        factorial *= i;
    }
    console.log(factorial);
}

// Inches to centimeters
function inchesCentimeters(param1){
    let inches = Number(param1);
    let centimeters = inches * 2.54;
    console.log(centimeters);
}

// Deposit calculator
function calculateDeposit(arg1, arg2, arg3) {
    let deposit = arg1;
    let months = Number(arg2);
    let annualInterest = arg3;
    let amountInterest = (deposit * annualInterest)/100;
    let accumulated = (amountInterest / 12);
    let time = (months * accumulated).toFixed(2);
    let finalAmount = parseFloat(deposit) + parseFloat(time);
    console.log(finalAmount);
}

// Radians to Degrees
function toDegrees(arg1) {
    let radians = Number(arg1);
    let pi = Math.PI;
    let degrees = radians * 180 / pi;
    console.log(degrees.toFixed(0));
}

// Greater number
function greaterNumber(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    let isGreater = num1 >= num2;
    if (isGreater == true) {
        console.log(num1);
    }
    if(isGreater == false){
        console.log(num2);
    }
}

// Even or odd
function evenOrOdd(num) {
    num = Number(num);
    if (num % 2 == 0) {
        console.log("even");
    }
    else {
        console.log("odd");
    }
}

// Area of figures
function area(arg1, arg2, arg3) {
    let  type = arg1;

    if (type === "square") {
        let size = Number(arg2);
        let squareArea = size * size;
        console.log(squareArea.toFixed(3))
    }
    else if (type === "rectangle") {
        let a = Number(arg2);
        let b = Number(arg3);
        let rectangleArea = a * b;
        console.log(rectangleArea.toFixed(3));
    } 
    else if (type === "circle") {
        let radius = Number(arg2);
        let circleArea = Math.PI * (radius * radius)
        console.log(circleArea.toFixed(3));
    }
    else if (type === "triangle") {
        let size = Number(arg2);
        let height = Number(arg3);
        let triangleArea = (size * height) / 2;
        console.log(triangleArea.toFixed(3));
    }
}

// Sum seconds
function sumSeconds(arg1, arg2, arg3) {
    let first = Number(arg1);
    let second = Number(arg2);
    let third = Number(arg3);
    let totalSeconds = first + second + third;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    }
    else{
        console.log(`${minutes}:${seconds}`);
    }   
}

// Metric convertor
function metricConverter(arg1, arg2, arg3) {
    let number = Number(arg1);
    let metric = arg2;
    let converted = arg3;

    if (metric === "mm") {
        if (converted === "m"){
            number = number / 1000;
        }
        if (converted === "cm") {
            number = number / 10;
        }
    }
    else if (metric === "m"){
        if (converted === "cm"){
            number = number * 100;
        } else if (converted === "mm") {
            number = number * 1000;
        }
    }
    else if(metric === "cm"){
        if (converted === "mm"){
            number = number * 10;
        } else if (converted === "m") {
            number = number / 100;
        }  
    }
    console.log(number.toFixed(3))
}

// Number operations
function numberOperators(arg1, arg2, arg3) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let operator = arg3;

    if (operator === "+"){
        let result = num1 + num2;
        if (result % 2 === 0){
            let even = "even";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`);
        }
        else {
            let odd = "odd";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${odd}`);
        }       
    }
    else if(operator === "-"){
        let result = num1 - num2;
        if (result % 2 === 0){
            let even = "even";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`);
        }
        else {
            let odd = "odd";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${odd}`);
        }       
    }
    else if(operator === "*"){
        let result = num1 * num2;
        if (result % 2 === 0){
            let even = "even";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`);
        }
        else {
            let odd = "odd";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${odd}`);
        }       
    }
    else if(operator === "/"){
        let result = num1 / num2;
        if (num2 === 0){
            console.log(`Cannot divide ${num1} by zero`);
        }
        else {
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
        }     
    }
    else if (operator === "%"){
        let result = num1 % num2;
        if (num2 === 0){
            console.log(`Cannot divide ${num1} by zero`);
        }
        else {
            console.log(`${num1} % ${num2} = ${result}`);
        }        
    }
}

// Even powers of 2
function evenNumbers(arg) {
    arg = Number(arg);
    for (let i = 0; i <= arg; i+=2) {
        let result = Math.pow(2, i)
        console.log(result);
    }
}

// Numbers divisable by 9
function numbersDivisible9(arg1, arg2) {
    arg1 = Number(arg1);
    arg2 = Number(arg2);
    let sum = 0;
    let numberStrings = "";
   for (let i = arg1; i <= arg2; i++) {
        if(i % 9 == 0){
            sum += i; 
            numberStrings += i + "\n";
        }
   }
   console.log(`The sum: ${sum}`);
   console.log(numberStrings);
}

// Numbers ending in 7
function numbers() {
    for (let i = 1; i <= 997; i++) {
        if (i % 10 === 7) {
            console.log(i);
        }
    }
}

// Divide without remainder
function division(input) {
    let nums = Number(input[0]);
    let divide2 = 0;
    let divide3 = 0;
    let divide4 = 0;

    for (let i = 1; i < input.length; i++) {
        let current = Number(input[i]);
        if (current % 2 === 0) {
            divide2++;
        } 
        if (current % 3 === 0) {
            divide3++;
        }
        if (current % 4 === 0) {
            divide4++;
        }
    }
    console.log(`${(divide2 / nums * 100).toFixed(2)}%`);
    console.log(`${(divide3 / nums * 100).toFixed(2)}%`);
    console.log(`${(divide4 / nums * 100).toFixed(2)}%`);
}

// Min number
function minNumbers(input) {
    let min_number = 1000000000;

    for (i = 1; i <= input.length; i++) {
        let current = Number(input[i]);
        if (current < min_number) {
            min_number = current;
        }
    }
    console.log(min_number);
}

// Max number
function maxNumber(input) {
    let index = 0;
    let command = input[index++];
    let maxNumber = Number.MAX_SAFE_INTEGER;


    while (command !== "Stop") {
        let currentNum = Number(command);
        if (currentNum < maxNumber){
        maxNumber = currentNum;
        }
        command = input[index++];
    }
    console.log(maxNumber);
}

// Count the words
function countWords(input) {
    let words = input.split(" ");
    let count = 0;

    for (let i = 0; i < words.length; i++) {
        count++;
    }

    if (count > 10){
        console.log(`The message is too long to be send! Has ${count} words.`);
    }
    else {
        console.log("The message was send successfully!");
    }
}

// Sequence 2k + 1
function sequence (input){
    let index = 0;
    let n = Number(input[index++]);
    let counter = 1;
    
    while (counter <= n){
        console.log(counter);
        counter = counter * 2 + 1;
    }
}

// Sum prime non prime
function numbers(input) {
    let index = 0;
    let num = input[index++];
    let sumPrime = 0;
    let sumNonPrime = 0;

    while (num !== "stop") {
        let currentNum = Number(num);
        if (currentNum < 0) {
            console.log('Number is negative.');
            num = input[index++];
            continue;
        } 

        if (currentNum !== 3 && currentNum !== 2 && currentNum !== 0){
            if (currentNum % 2 === 0 || currentNum % 3 === 0){
            sumNonPrime += currentNum;
            num = input[index++];
            continue;
            }
        } else if (currentNum === 0) {
            sumNonPrime += currentNum;
            num = input[index++];
            continue;
        }

        if (currentNum % 1 == 0 && currentNum % currentNum == 0 && currentNum === currentNum) {
            sumPrime += currentNum;
        } else {
            sumNonPrime += currentNum;
        }
        num = input[index++];
    }

console.log(`Sum of all prime numbers is: ${sumPrime}`);

console.log(`Sum of all non prime numbers is: ${sumNonPrime}`);
}

// Print and sum
function print(num1, num2){
    let sum = 0;
    let printLine = "";
    let current = 0;

    for (let i = num1; i <= num2; i++){
        sum += i;
        current = i.toString();
        printLine += current + " ";
    }
   
    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

// Print triangle
function triangle(n) {  
    for (let i = 1; i <= n; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
            line += i + " ";   
        }
    console.log(line);
    }
}

// Print Multiplication table
function multiplication(n) {
    for (let a = n; a <= n; a++) {
        for (let b = 1; b <= 10; b++) {
           let result = a * b;
           console.log(`${a} X ${b} = ${result}`);
        }
    }
}