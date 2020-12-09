function fibonacciOddNums(num) {
    let prevNum = 0;
    let currNum = 1;
    let sum = 0;

    while (currNum <= num) {
        if (currNum % 2 !== 0) {
          sum += currNum;
        }
        currNum += prevNum;
        prevNum = currNum - prevNum;
      }
      return sum;
}

fibonacciOddNums(10);