function evenOdd(input) {
    let index = 0;
    let firstNum = Number(input[index++]);
    let secondNum = Number(input[index++]);
    let printline = "";

    for (let i = firstNum; i <= secondNum; i++) {
        let current = "" + i;
        let oddSum = 0;
        let evenSum = 0;
        for (let j = 0; j < current.length; j++) {
            let currentDigit = Number(current.charAt(j));
            if (j % 2 == 0) {
                evenSum += currentDigit;
            } else {
                oddSum += currentDigit;
            }
        }
        if (oddSum === evenSum){
            printline += `${i} `
        }
    }
    console.log(printline);
}

evenOdd(["100000",
"100050"]);

evenOdd(["123456",
"124000"]);
