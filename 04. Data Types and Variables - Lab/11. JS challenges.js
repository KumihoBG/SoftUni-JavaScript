function candies(children, candy) {
    let candyPerChild = Math.floor(candy / children);
    let result = candyPerChild * children;
    return result;
}

// candies(3, 9);

function depositProfit(deposit, rate, threshold){
    rate = 0.2;
    let counter = 0;

    while (deposit < threshold){
        counter++;
        deposit += deposit * rate;
    }
    return counter;
}

// depositProfit(100, 20, 170);

function chunkyMonkey(values, size) {
    const nested = [];
    let count = 0;
    
    while(count < values.length) {
        nested.push(values.slice(count, count += size));
    }
    console.log(nested);
    return nested;
}

chunkyMonkey(["a", "b", "c", "d"], 2)