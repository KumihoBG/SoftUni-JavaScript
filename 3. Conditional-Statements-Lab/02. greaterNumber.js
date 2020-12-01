function greaterNumber(num1, num2){
    num1 = Number(num1);
    num2 = Number(num2);
    let isGreater = num1 >= num2;
    if (isGreater == true) {
        console.log(num1);
    }
    if(isGreater == false){
        console.log(num2);
    }
}

greaterNumber("10", "10");