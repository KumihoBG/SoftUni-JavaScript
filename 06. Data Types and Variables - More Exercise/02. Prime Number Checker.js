function primeChecker(num){
    let isPrime = false;
        if (num < 0) {
            isPrime = false;
        }
        if (num % 1 == 0 && num % num == 0 && num === num) {
            isPrime = true;
        }
        if (num % 2 === 0 || num % 3 === 0) {
            isPrime = false;
        }
    console.log(isPrime);
}

primeChecker(7);