function rounding(arg1, arg2){
    let firstNum = Number(arg1);
    let secondNum = Number(arg2);
    
    if (secondNum > 15){
        secondNum = 15;
    }

    firstNum = parseFloat(firstNum.toFixed(secondNum));
    console.log(firstNum);
}

rounding(3.1415926535897932384626433832795,2);
rounding(10.5,3);