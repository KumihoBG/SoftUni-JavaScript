function pyramid(arg) {
    let n = Number(arg);
    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";

    for (let rows = 1; rows <= n; rows++){
        for (let cols = 1; cols <= rows; cols++){
            if (current > n){
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger){
            break;
        }
    }
}

pyramid(["7"]);
console.log('----------------');
pyramid(["12"]);
console.log('----------------');
pyramid(["15"]);