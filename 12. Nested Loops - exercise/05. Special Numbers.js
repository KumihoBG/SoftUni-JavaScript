function specialNums(input){
    let n = Number(input[0]);
    let printLine = "";

    for (let i = 1111; i <= 9999; i++) {
        let current = i.toString();
        let first = Number(current[0]);
        let second = Number(current[1]);
        let third = Number(current[2]);
        let fourth = Number(current[3]);
        
        let firstMagic = n % first === 0;
        let secondMagic = n % second === 0;
        let thirdMagic = n % third === 0;
        let fourthMagic = n % fourth === 0;

        if (firstMagic && secondMagic && thirdMagic && fourthMagic){
            printLine += current + " ";
        }
    }
    console.log(printLine);
}

specialNums(["3"]);