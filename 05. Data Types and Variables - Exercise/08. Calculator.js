function calculator(num, operator, num2){
    num = Number(num);
    num2 = Number(num2);
    let result = 0;

    if (operator === "+"){
        result = num + num2;
    } 
    else if (operator === "*"){
        result = num * num2;
    }
    else if (operator === "-"){
        result = num - num2;
    }
    else if (operator === "/"){
        result = num / num2;
    }
    console.log(result.toFixed(2));
}

calculator(25.5,
    '-',
    3);