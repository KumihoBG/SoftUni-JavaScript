function combinations(input) {
    let index = 0;
    let counter = 0;
    let n = Number(input[index++]);
    for (index = 0; index <= n; index++) {
        for (let j = 0; j <= n; j++) {
            for (let k = 0; k <= n; k++) {
                let sum = index + j + k;
                if (sum === n) {
                    counter++;
                    break;
                }
            }
        }
    }
    console.log(counter);
}

combinations(["25"]);
combinations(["20"]);
combinations(["5"]);
