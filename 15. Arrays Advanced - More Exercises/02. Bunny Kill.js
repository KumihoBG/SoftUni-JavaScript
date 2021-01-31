function bunnyKill(input) {
    let matrix = [];
    let bombsIndex = input.pop().split(' ');
    input.forEach(line => matrix.push(line.split(' ').map(Number)));

    for (let bombIndex of bombsIndex) {
        let [bombRow, bombCol] = bombIndex.split(',').map(Number);
        let damage = matrix[bombRow][bombCol];
        for (let row = 0, n = matrix.length; row < n; row++) {
            for (let col = 0, m = matrix[row].length; col < m; col++) {
                if ((Math.abs(row - bombRow) <= 1 && Math.abs(col - bombCol) <= 1) && (col !== bombCol || row !== bombRow)) {
                    matrix[row][col] = Math.max(0, matrix[row][col] - damage);
                }
            }
        }
    }

    let sum = 0,
        counter = 0;
    for (let row of matrix) {
        for (let col of row) {
            sum += col;
            if (col > 0) {
                counter++;
            }
        }
    }

    console.log(sum);
    console.log(counter);
    // for (let row = 0; row < matrix.length; row++) {
    //     let str = '';
    //     for (let col = 0; col < row.length; col++) {
    //         if (matrix[row][col].toString().length === 1) {
    //             str += '  ' + matrix[row][col];
    //         } else {
    //             str += ' ' + matrix[row][col];
    //         }
    //     }
    //     console.log(str);
    // }
}

bunnyKill(['5 10 15 20',
'10 10 10 10',
'10 15 10 10',
'10 10 10 10',
'2,2 0,1']);