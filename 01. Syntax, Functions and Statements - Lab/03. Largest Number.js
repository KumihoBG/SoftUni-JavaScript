function largestNum(...params) {
    let result = Math.max(...params);
    console.log(`The largest number is ${result}.`);
}

largestNum(5, -3, 16);