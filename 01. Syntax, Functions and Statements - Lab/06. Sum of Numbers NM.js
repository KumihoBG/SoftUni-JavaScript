function sumOfNums(...params) {
    let newArr = params.map(Number);
    let sum = 0;
    let numA = newArr[0];
    let numB = newArr[1];

    for (let i = numA; i <= numB; i++) {
        sum += i;
    }
    console.log(sum);
}

sumOfNums('1', '5' );
sumOfNums('-8', '20');