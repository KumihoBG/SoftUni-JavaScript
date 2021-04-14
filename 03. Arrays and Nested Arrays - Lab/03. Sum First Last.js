function sumFirstLast(input) {
    let first = Number(input.shift());
    let last = Number(input.pop());
    return first + last;
}

console.log(sumFirstLast(['20', '30', '40']));