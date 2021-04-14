function smallestTwoNums(input) {
    let result = input
    .sort((a, b) => a - b)
    .slice(0, 2)
    .join(' ');
    return result;
}

console.log(smallestTwoNums([30, 15, 50, 5]));
console.log(smallestTwoNums([3, 0, 10, 4, 7, 3]));