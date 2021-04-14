function evenPositions(input) {
    let result = input.filter((v, i) => (i % 2) == 0);
    console.log(result.join(' '));
}

evenPositions(['20', '30', '40', '50', '60']);
evenPositions(['5', '10']);