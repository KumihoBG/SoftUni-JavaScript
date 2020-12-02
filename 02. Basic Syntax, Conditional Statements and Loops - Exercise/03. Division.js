function division(num){
    let divisable2 = num % 2 === 0;
    let divisable3 = num % 3 === 0;
    let divisable6 = num % 6 === 0;
    let divisable7 = num % 7 === 0;
    let divisable10 = num % 10 === 0;

    if (divisable10 == true){
        console.log(`The number is divisible by 10`);
    }
    else if (divisable7 === true){
        console.log(`The number is divisible by 7`);
    }
    else if (divisable6 === true){
        console.log(`The number is divisible by 6`);
    }
    else if (divisable3 === true){
        console.log(`The number is divisible by 3`);
    }
    else if (divisable2 === true){
        console.log(`The number is divisible by 2`);
    } else {
        console.log('Not divisible');
    }    
}

division(30);