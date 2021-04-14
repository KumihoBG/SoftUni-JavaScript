function biggestElement(matrix) {
    let biggest = Number.MIN_SAFE_INTEGER;

    for (let row of matrix) {
        for (let num of row) {
            if (num > biggest) {
                biggest = num;
            }
        }
    }

    return biggest;
}

console.log(biggestElement([
    [20, 50, 10],
    [8, 33, 145]]
   ));

 console.log(biggestElement([[3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]]
   ));