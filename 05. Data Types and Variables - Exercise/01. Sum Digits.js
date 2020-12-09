function sumDigits(num){
    let digit = num.toString();
    let sum = 0;

    for(let i = 0; i < digit.length; i++){
        let currentNum = Number(digit[i]);
        sum += currentNum;
    }
    console.log(sum);
}

sumDigits(97561);