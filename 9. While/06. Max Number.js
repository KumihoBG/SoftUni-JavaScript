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

maxNumber(["100",
"99",
"80",
"70",
"Stop"]);