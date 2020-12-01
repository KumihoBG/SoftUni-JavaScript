function account(input) {
    let index = 0;
    let command = input[index++];
    let totalSum = 0;


    while (command !== "NoMoreMoney") {
        let sum = Number(command);
        if (sum < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${sum.toFixed(2)}`);
        totalSum += sum;
        command = input[index++];
    }
    console.log(`Total: ${totalSum.toFixed(2)}`);
}

// account(["5.51",
//     "69.42",
//     "100",
//     "NoMoreMoney"
// ]);

account(["120",
"45.55",
"-150"]);