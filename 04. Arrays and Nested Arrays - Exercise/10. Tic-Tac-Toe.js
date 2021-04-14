function ticTacToe(matrix) {
    let playerX = false;
    let playerO = false;
    let dashBoard =
        [[false, false, false],
        [false, false, false],
        [false, false, false]];

    for (let i = 0; i < matrix.length; i++) {
        let currentMove = matrix[i].split(' ').map(Number);
        let firstIndex = currentMove[0];
        let secondIndex = currentMove[1];
        if (dashBoard[0].every(el => el === "X") 
        || dashBoard[1].every(el => el === "X") 
        || dashBoard[2].every(el => el === "X")
        || dashBoard[0][0] === "X"
        || dashBoard[1][1] === "X"
        || dashBoard[2][2] === "X"
        || dashBoard[0][2] === "X"
        || dashBoard[2][0] === "X"
        || dashBoard[1][1] === "X") {
            console.log(`Player X wins!`);
            dashBoard.forEach(line => {
                console.log(line.join('\t'));
            });
            break;
        } else if (dashBoard[0].every(el => el === "O") 
        || dashBoard[0].every(el => el === "O") 
        || dashBoard[1].every(el => el === "O")
        || dashBoard[2].every(el => el === "O")) {
            console.log(`Player O wins!`);
            dashBoard.forEach(line => {
                console.log(line.join('\t'));
            });
            break;
        } else if (matrix.length <= 0) {
            console.log("The game ended! Nobody wins :(");
        }

        if (playerX === true) {
            dashBoard[firstIndex][secondIndex] = "X";
            playerX = false;
            playerO = true;
            continue;
        } else if (playerO === true) {
            dashBoard[firstIndex][secondIndex] = "O";
            playerO = false;
            playerX = true;
            continue;
        }

        if (i % 2 === 0) {
            if (dashBoard[firstIndex][secondIndex] !== "O") {
                dashBoard[firstIndex][secondIndex] = "X";
            } else {
                playerX = true;
                console.log("This place is already taken. Please choose another!");
            }
        } else {
            if (dashBoard[firstIndex][secondIndex] !== "X") {
                dashBoard[firstIndex][secondIndex] = "O";
            } else {
                playerO = true;
                console.log("This place is already taken. Please choose another!");
            }
        }
    }
}

ticTacToe(
["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]);

// ticTacToe(
//     ["0 0",
//         "0 0",
//         "1 1",
//         "0 1",
//         "1 2",
//         "0 2",
//         "2 2",
//         "1 2",
//         "2 2",
//         "2 1"]);