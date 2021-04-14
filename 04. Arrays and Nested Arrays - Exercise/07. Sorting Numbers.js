function sortingNumbers(input) {
    let sorted = input.sort((a, b) => a - b);
    let length = input.length;
    let result = [];

    for (let i = 0; i < length; i++) {
        if (i % 2 === 0) {
            let element = sorted.shift();
            result.push(element);
        } else {
            let element = sorted.pop();
            result.push(element);
        }
    }
    return result;
}

sortingNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);