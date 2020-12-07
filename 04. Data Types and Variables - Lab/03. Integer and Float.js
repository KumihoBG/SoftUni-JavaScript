function intFloat(num1, num2, num3){
    let sum = num1 + num2 + num3;
    let result = sum + "";
    if (result.includes('.')){
        console.log(`${sum} - Float`);
    } else {
        console.log(`${sum} - Integer`);
    }
}

intFloat(9, 100, 1.1);
intFloat(100, 200, 303);