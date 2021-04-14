function list(input) {
    let sorted = input.sort((a, b) => a.localeCompare(b));
    let number = 1;

    for (let i = 0; i < sorted.length; i++) {
        console.log(`${number}.${sorted[i]}`);
        number++;
    }
}

list(["John", "Bob", "Christina", "Ema"]);