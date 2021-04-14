function biggerHalf(input) {
    let result = input.sort((a, b) => a - b).slice(input.length/2, input.length);
    return result;
}

biggerHalf([4, 7, 2, 5]);
biggerHalf([3, 19, 14, 7, 2, 19, 6]);