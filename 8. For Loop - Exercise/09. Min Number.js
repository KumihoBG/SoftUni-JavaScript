function minNumbers(input) {
    let min_number = 1000000000;

    for (i = 1; i <= input.length; i++) {
        let current = Number(input[i]);
        if (current < min_number) {
            min_number = current;
        }
    }
    console.log(min_number);
}

// minNumbers(["2", "100", "99"]);
// minNumbers(["3", "-10", "20", "-30"]);
minNumbers(["4", "45", "-20", "7", "99"]);
// minNumbers(["1", "999"]);
// minNumbers(["2", "-1", "-2"]);




