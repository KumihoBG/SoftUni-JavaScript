function maxSequence(input) {
    let newArr = [];
    let counter = 0;
    let winningCounter = 0;
    let element = 0;
    let number = "";

    for (let i = 0; i < input.length - 1; i++) {
        let current = input[i];
        let next = input[i + 1];
        if (current == next) {
            counter++;
            if (counter > winningCounter) {
                winningCounter = counter;
                element = input[i];
                number = input[i];
            }
        } else {
            counter = 0;
        }
    }
    for (let j = 0; j <= winningCounter; j++) {
        newArr.push(number);
    }
    console.log(newArr.join(' '));
}

maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);