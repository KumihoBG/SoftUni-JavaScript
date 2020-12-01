function numberOperators(arg1, arg2, arg3) {
    let num1 = Number(arg1);
    let num2 = Number(arg2);
    let operator = arg3;

    if (operator === "+"){
        let result = num1 + num2;
        if (result % 2 === 0){
            let even = "even";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`);
        }
        else {
            let odd = "odd";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${odd}`);
        }       
    }
    else if(operator === "-"){
        let result = num1 - num2;
        if (result % 2 === 0){
            let even = "even";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`);
        }
        else {
            let odd = "odd";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${odd}`);
        }       
    }
    else if(operator === "*"){
        let result = num1 * num2;
        if (result % 2 === 0){
            let even = "even";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${even}`);
        }
        else {
            let odd = "odd";
            console.log(`${num1} ${operator} ${num2} = ${result} - ${odd}`);
        }       
    }
    else if(operator === "/"){
        let result = num1 / num2;
        if (num2 === 0){
            console.log(`Cannot divide ${num1} by zero`);
        }
        else {
            console.log(`${num1} / ${num2} = ${result.toFixed(2)}`);
        }     
    }
    else if (operator === "%"){
        let result = num1 % num2;
        if (num2 === 0){
            console.log(`Cannot divide ${num1} by zero`);
        }
        else {
            console.log(`${num1} % ${num2} = ${result}`);
        }        
    }
}

// numberOperators("10","12","+");
// numberOperators("10","1","-");
// numberOperators("7","3","*");
// numberOperators("123","12","/");
// numberOperators("10","3","%");
// numberOperators("112","0","/");
numberOperators("10","0","%");







