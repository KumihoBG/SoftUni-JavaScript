function reverseArray(n, arr){
    n = Number(n);
    let result = arr.splice(0, n);
    let reversed = result.reverse();
    let output = reversed.join(' ');
    console.log(output);
}

// reverseArray(3, [10, 20, 30, 40, 50]);
// reverseArray(4, [-1, 20, 99, 5]);
reverseArray(2, [66, 43, 75, 89, 47]);