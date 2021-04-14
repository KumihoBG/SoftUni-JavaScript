function equalNeighbors(matrix) {
    let pairs = 0;

    matrix.forEach((row, index) => {
        row.forEach((el, position) => {
            if (el === row[position + 1]){
                pairs++;
            }

            if (matrix[index + 1] && el === matrix[index + 1][position]) {
                pairs++;
            }
        });
    });
    return pairs;
}

console.log(equalNeighbors(
[['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]));

console.log(equalNeighbors(
[['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]));