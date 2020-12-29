function magicNum(input) {
    let first = input[0];
    let second = input[1];
    let third = input[2];
    let sum = 0;
    let rowSumOne = 0;
    let rowSumTwo = 0;
    let rowSumThree = 0;
    let isMagical = false;
    let k = 0;

    for (let i = 0; i < first.length; i++) {
        let ColumnOne = first[i];
        rowSumOne += ColumnOne;
        for (let j = i; j < second.length; j++) {
            let secondColumn = second[i];
            rowSumTwo += secondColumn;
            for (k = j; k < third.length; k++) {
                let thirdColumn = third[k];
                rowSumThree += thirdColumn;
                sum = Number(ColumnOne + secondColumn + thirdColumn);
                if (sum == rowSumOne && sum == rowSumTwo && sum == rowSumThree) {
                    isMagical = true;
                }
                break;
            }
            break;
        }
    }
    console.log(isMagical);
}

magicNum([[4, 5, 6],
[6, 5, 4],
[5, 5, 5]]);

magicNum([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]]);

magicNum([[1, 0, 0],
[0, 0, 1],
[0, 1, 0]]);