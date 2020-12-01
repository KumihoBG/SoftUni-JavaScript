function sumNumbers(input) {
    let index = 0;
    let num = Number(input[index++]);
    let sum = 0;

    while (sum < num) {
        let currentNum = Number(input[index]);
        if (sum >= num){
            break;
        }
        sum += currentNum;
        currentNum = input[index++]; 
    }
    console.log(sum); 
}

sumNumbers(["100",
"10",
"20",
"30",
"40"]);