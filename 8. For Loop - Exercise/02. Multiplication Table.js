function multiply(arg) {
    let num = Number(arg);
    for (let i = 1; i <= 10; i++) {
        let sum = i * num;
        console.log(`${i} * ${num} = ${sum}`);
    }
}

multiply("7");