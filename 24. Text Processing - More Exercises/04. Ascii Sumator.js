function asciiSum(arr) {
    let first = arr.shift().charCodeAt(0);
    let second = arr.shift().charCodeAt(0);
    let sum = 0;
    arr = arr.toString();
    let start = Math.min(first, second);
    let end = Math.max(first, second);

    for (let i = 0; i < arr.length; i++) {
        let currentChar = arr.charCodeAt(i);
        if (currentChar > start && currentChar < end) {
            sum += currentChar;
        }

    }
    console.log(sum);
}

asciiSum([ '.', '@', 'dsg12gr5653feee5']);