function oddPositions(input) {
    let result = input
    .filter((el, i) => (i % 2) == 1)
    .map(el => el * 2)
    .reverse()
    .join(' ');
    return result;
}

console.log(oddPositions([10, 15, 20, 25]));
console.log(oddPositions([3, 0, 10, 4, 7, 3]));