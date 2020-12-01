function sumNumbers(input) {
    let index = 0;
    let j = 0;
    let start = Number(input[index++]);
    let end = Number(input[index++]);
    let magicNumber = Number(input[index++]);
    let counter = 0;
    let isFound = false;
    let tempStart = 0;
    let tempEnd = 0;

    for (index = start; index <= end; index++) {
        for (j = start; j <= end; j++){
            if (isFound == true){
                break;
            } 
            counter++;
            let sum = index + j;
            if (sum === magicNumber){
                tempStart = index;
                tempEnd = j;
                isFound = true;
                break;
            }
           
        }
    }
    if (isFound == true){
        console.log(`Combination N:${counter} (${tempStart} + ${tempEnd} = ${magicNumber})`);
    }
    else {
        console.log(`${counter} combinations - neither equals ${magicNumber}`);
    }
}

// sumNumbers(["1", "10", "5"]);
// sumNumbers(["88",
// "888",
// "1000"]);
// sumNumbers(["23",
// "24",
// "20"]);
sumNumbers(["88", 
"888", 
"2000"]);




