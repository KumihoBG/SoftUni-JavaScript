function maxSequence(arr) {
    let max = arr[0];
    let result = arr.filter(el => {
        if (el >= max) {
            max = el;
        }
        return el >= max;
    });
    console.log(result.join(' '));
}

maxSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
maxSequence([20, 3, 2, 15, 6, 1]);