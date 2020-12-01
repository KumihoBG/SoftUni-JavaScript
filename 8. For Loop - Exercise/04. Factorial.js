function factorial(arg) {
    let num = Number(arg);
    let factorial = 1;

    for (let i = num; i >= 2; i--) {
        factorial *= i;
    }
    console.log(factorial);
}

factorial("4");