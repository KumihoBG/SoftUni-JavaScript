function evenNumbers(arg) {
    arg = Number(arg);
    for (let i = 0; i <= arg; i+=2) {
        let result = Math.pow(2, i)
        console.log(result);
    }
}

evenNumbers("7");