function maxSequence(input) {
    let newArr = [];
    newArr.push(input[0]);
    let max = 0;
    let totalMaxNum = 0;

    for (let i = 1; i < input.length; i++) {
        let current = input[i];
        let next = input[i + 1];
        let previous = input[i - 1];
        if (current > previous){
            max = current;
        } else {
            max = previous;
        }
        if (next > current) {
            max = next;
            newArr.push(max);
        }
    }
    console.log(newArr.join(' '));
}

maxSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// maxSequence([20, 3, 2, 15, 6, 1]);