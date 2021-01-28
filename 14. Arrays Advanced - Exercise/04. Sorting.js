function solve(input) {
    let result = [];
    array = input.sort((a, b) => a - b);
    while (array.length !== 0) {
        result.push(array[array.length - 1]) && array.pop();
        result.push(array[0]) && array.shift();
    }
    console.log(result.join(' '));
}

//94 1 69 2 63 3 52 18 31 21
solve([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);