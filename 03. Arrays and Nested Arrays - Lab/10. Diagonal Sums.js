function diagonalSums(matrix) {
    let sumOne = 0;
    let sumTwo = 0;
    let elementIndex = 0;
    
    matrix.forEach((row, index) => {
        sumOne += row[elementIndex];
        sumTwo += row[matrix.length - 1 - elementIndex];
        elementIndex++;
    });
    
    return sumOne + " " + sumTwo;
}

diagonalSums(
    [[20, 40],
    [10, 60]]);

diagonalSums(
    [[3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]]);