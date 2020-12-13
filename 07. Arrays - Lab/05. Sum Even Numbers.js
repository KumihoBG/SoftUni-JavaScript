function sumEvenNums(str){
    let sum = 0;

    for (i = 0; i < str.length; i++){
        let currentNum = Number(str[i]);
        if (currentNum % 2 == 0){
            sum += currentNum;
        }
    }
    console.log(sum);
}

sumEvenNums(['1','2','3','4','5','6']);