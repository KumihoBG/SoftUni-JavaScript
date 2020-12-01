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

// numbers(["3",
//     "9",
//     "0",
//     "7",
//     "19",
//     "4",
//     "stop"]);

// numbers(["30",
// "83",
// "33",
// "-1",
// "20",
// "stop"]);

numbers(["0",
"-9",
"0",
"stop"]);
