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
function inchesCentimeters(param1) {
    let inches = Number(param1);
    let centimeters = inches * 2.54;
    console.log(centimeters);
}

// Deposit calculator
function calculateDeposit(arg1, arg2, arg3) {
    let deposit = arg1;
    let months = Number(arg2);
    let annualInterest = arg3;
    let amountInterest = (deposit * annualInterest) / 100;
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
function greaterNumber(num1, num2) {
    num1 = Number(num1);
    num2 = Number(num2);
    let isGreater = num1 >= num2;
    if (isGreater == true) {
        console.log(num1);
    }
    if (isGreater == false) {
        console.log(num2);
    }
}

// Product of pair elements in an array
function adjacentElementsProduct(nums) {
    let product = 0;
    let result = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        num1 = nums[i++];
        num2 = nums[i];
        product = num1 * num2;
        if (product > result) {
            result = product;
        } else {
            product = product;
        }
        num1 = nums[i--];
        product = 0;
    }
   console.log(result);;
}

// Jumps to avoid obstacles in array
let arraySorted = nums.sort();
let jump = 2;

for (let i = 0; i < arraySorted.length; i++) {
    if (arraySorted[i] % jump == 0) {
        i = -1;
        jump++;
    }
}
console.log(jump);

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
    let type = arg1;

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

// Cone area and volume
function cone(radius, height){
    let slantHeight = Math.sqrt(radius * radius + height * height);
    let volume = Math.PI * radius * radius * height / 3;
    let area = Math.PI * radius * (radius + slantHeight);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

// Heron's formula for triangle area
function triangleArea(){
    let input = arguments;
    let sideA = Number(arguments[0]);
    let sideB = Number(arguments[1]);
    let sideC = Number(arguments[2]);
    let semiPerimeter = (sideA + sideB + sideC) / 2;
    let formula = Math.sqrt(semiPerimeter * (semiPerimeter - sideA) * (semiPerimeter - sideB) * (semiPerimeter - sideC));
    console.log(formula);
}

// Sum seconds
function sumSeconds(arg1, arg2, arg3) {
    let first = Number(arg1);
    let second = Number(arg2);
    let third = Number(arg3);
    let totalSeconds = first + second + third;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    if (seconds < 10) {
        console.log(`${minutes}:0${seconds}`);
    }
    else {
        console.log(`${minutes}:${seconds}`);
    }
}

// Metric convertor
function metricConverter(arg1, arg2, arg3) {
    let number = Number(arg1);
    let metric = arg2;
    let converted = arg3;

    if (metric === "mm") {
        if (converted === "m") {
            number = number / 1000;
        }
        if (converted === "cm") {
            number = number / 10;
        }
    }
    else if (metric === "m") {
        if (converted === "cm") {
            number = number * 100;
        } else if (converted === "mm") {
            number = number * 1000;
        }
    }
    else if (metric === "cm") {
        if (converted === "mm") {
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

    if (operator === "+") {
        let result = num1 + num2;
        if (result % 2 === 0) {
            let even = "even";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`);
        }
        else {
            let odd = "odd";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${odd}`);
        }
    }
    else if (operator === "-") {
        let result = num1 - num2;
        if (result % 2 === 0) {
            let even = "even";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`);
        }
        else {
            let odd = "odd";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${odd}`);
        }
    }
    else if (operator === "*") {
        let result = num1 * num2;
        if (result % 2 === 0) {
            let even = "even";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`);
        }
        else {
            let odd = "odd";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${odd}`);
        }
    }
    else if (operator === "/") {
        let result = num1 / num2;
        if (num2 === 0) {
            console.log(`Cannot divide ${num1} by zero`);
        }
        else {
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
        }
    }
    else if (operator === "%") {
        let result = num1 % num2;
        if (num2 === 0) {
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
    for (let i = 0; i <= arg; i += 2) {
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
        if (i % 9 == 0) {
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
        if (currentNum < maxNumber) {
            maxNumber = currentNum;
        }
        command = input[index++];
    }
    console.log(maxNumber);
}

// Bigger number
function biggerNumber(arg1, arg2, arg3){
    let array = [arg1, arg2, arg3].sort();
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++){
        let currentNum = Number(array[i]);
        if (currentNum > maxNumber) {
            maxNumber = currentNum;
        }
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

    if (count > 10) {
        console.log(`The message is too long to be send! Has ${count} words.`);
    }
    else {
        console.log("The message was send successfully!");
    }
}

// Sequence 2k + 1
function sequence(input) {
    let index = 0;
    let n = Number(input[index++]);
    let counter = 1;

    while (counter <= n) {
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

        if (currentNum !== 3 && currentNum !== 2 && currentNum !== 0) {
            if (currentNum % 2 === 0 || currentNum % 3 === 0) {
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

// Simple prime checker
function primeChecker(num){
    let isPrime = false;
        if (num < 0) {
            isPrime = false;
        }
        if (num % 1 == 0 && num % num == 0 && num === num) {
            isPrime = true;
        }
        if (num % 2 === 0 || num % 3 === 0) {
            isPrime = false;
        }
    console.log(isPrime);
}

// Print and sum
function print(num1, num2) {
    let sum = 0;
    let printLine = "";
    let current = 0;

    for (let i = num1; i <= num2; i++) {
        sum += i;
        current = i.toString();
        printLine += current + " ";
    }

    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

// Sum digits in a number
function sumDigits(num){
    let digit = num.toString();
    let sum = 0;

    for(let i = 0; i < digit.length; i++){
        let currentNum = Number(digit[i]);
        sum += currentNum;
    }
    console.log(sum);
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

// Character sequence
function characters(arg) {
    let sequence = arg;
    for (let i = 0; i < sequence.length; i++) {
        let letter = sequence[i];
        console.log(letter);
    }
}

// Replace char from one string
function rightPlace(str, char, result){
    let word = str.replace("_", char);
    if (word === result){
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

// Looks for char in a string = includes()
function intFloat(num1, num2, num3){
    let sum = num1 + num2 + num3;
    let result = sum + "";
    if (result.includes('.')){
        console.log(`${sum} - Float`);
    } else {
        console.log(`${sum} - Integer`);
    }
}

// Vowel sum
function sum(arg) {
    let vowels = arg;
    let sum = 0;
    for (i = 0; i < vowels.length; i++) {
        switch (vowels.charAt(i)) {
            case "a": sum += 1; break;
            case "e": sum += 2; break;
            case "i": sum += 3; break;
            case "o": sum += 4; break;
            case "u": sum += 5; break;
            default: break;
        }
    }
    console.log(sum);
}

// Reverse string - an array element
let index = 0;
let username = input[index++].toString();
let usernameReverse = "";

for (let i = username.length + 1; i >= 0; i--) {
    usernameReverse += username.charAt(i);
}

// Reverse simple string
function reverseString(string) {
    let result = string.split('').reverse().join('');
    console.log(result);
}

// Reverse chars in a string
function reverseString(str1, str2, str3) {
    let stringRes = str1 + str2 + str3;
    let result = stringRes.split('').reverse().join(' ');
    console.log(result);
}

// Upper or Lower case
function lowerUpper(input){
    if (input === input.toUpperCase()){
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

// Sort Numbers
function sortNumbers(arg1, arg2, arg3) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let num3 = Number(arg3);
    // Create array from numbers
    let array = [num1, num2, num3];
    // Sort array elements in descending mode
    array.sort(function (a, b) { return b - a });

    // Loop the array elements and print them
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}

// Get the next day in a date from calendar
function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let tomorrow = new Date(year, month - 1, date.getDate() + 1);
    console.log(`${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`);
}

// Gets last digit in a number from an array
function englishName(input) {
    let number = input.toString();
    let lastNumber = number[number.length - 1];
    switch (lastNumber) {
        case "1": console.log("one"); break;
        case "2": console.log("two"); break;
        case "3": console.log("three"); break;
        case "4": console.log("four"); break;
        case "5": console.log("five"); break;
        case "6": console.log("six"); break;
        case "7": console.log("seven"); break;
        case "8": console.log("eight"); break;
        case "9": console.log("nine"); break;
        case "0": console.log("zero"); break;
        default: break;
    }
}

// Calculator
function calculator(num, operator, num2){
    num = Number(num);
    num2 = Number(num2);
    let result = 0;

    if (operator === "+"){
        result = num + num2;
    } 
    else if (operator === "*"){
        result = num * num2;
    }
    else if (operator === "-"){
        result = num - num2;
    }
    else if (operator === "/"){
        result = num / num2;
    }
    console.log(result.toFixed(2));
}

// Sum digits i from a loop which sum is equal to 5,7,11
function specialNums(n) {
    let sum = 0;
    let isSpecial = false;
    let tf = "";

    for (let i = 1; i <= n; i++){
        i = i.toString();
        for (let j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }
        if (sum === 5 || sum === 7 || sum === 11){
            isSpecial = true;
            tf = "True";
        } else {
            isSpecial = false;
            tf = "False";
        }
        console.log(`${i} -> ${tf}`);
        sum = 0;
    }
}

// Triples of latin letters
function trippleLetters(n) {
    for(let i = 0; i < n; i++){
        let firstLetter = String.fromCharCode(i + 97);
        for(let j = 0; j < n; j++){
            let secondLetter = String.fromCharCode(j + 97);
            for(let k = 0; k < n; k++){
                let thirdLetter = String.fromCharCode(k + 97);
                console.log(`${firstLetter}${secondLetter}${thirdLetter}`);
            }
        }
    }
}

// Get distance between 2 points x and y
function distance(x1, y1, x2, y2) {
    let firstPoint = x2 - x1;
    let secondPoint = y2 - y1;
    let powerOne = Math.pow(firstPoint, 2);
    let powerTwo = Math.pow(secondPoint, 2);
    let distance = Math.sqrt(powerOne + powerTwo);
    console.log(distance);
}

// Fibonacci Odd numbers sum
function fibonacciOddNums(num) {
    let prevNum = 0;
    let currNum = 1;
    let sum = 0;

    while (currNum <= num) {
        if (currNum % 2 !== 0) {
          sum += currNum;
        }
        currNum += prevNum;
        prevNum = currNum - prevNum;
      }
      return sum;
}

// Split array in two parts
function splitArray(values, size) {
    const nested = [];
    let count = 0;
    
    while(count < values.length) {
        nested.push(values.slice(count, count += size));
    }
    console.log(nested);
    return nested;
}

// Binary to decimal
function binary(binary){
    binary = binary;
    let decimal = 0;
    let sumDigits = 0;
    let power = binary.length - 1;

    for(let i = 0; i < binary.length; i++){
        let current = Number(binary[i]);
        sumDigits = current * Math.pow(2, power);
        decimal += sumDigits;
        power--;
    }
    console.log(decimal);
}
