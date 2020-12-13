function equalArrays(str1, str2) {
    let sum = 0;
    let areEqual = true;

    for (let i = 0; i < str1.length; i++) {
        str1[i] = Number(str1[i]);
    }
    for (let i = 0; i < str2.length; i++) {
        str2[i] = Number(str2[i]);
    }

    for (let i = 0; i < str2.length; i++) {
        if (str1[i] !== str2[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            areEqual = false;
            break;
        }
        if (str1[i] === str2[i]) {
            areEqual = true;
        }
    }

    if (areEqual == true) {
        for (i = 0; i < str1.length; i++) {
            let current = Number(str1[i]);
            sum += current;
        }
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}

equalArrays(['10','20','30'], ['10','20','30']);
equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
equalArrays(['1'], ['10']);