function serialize(str) {
    let sequence = str.shift();
    let collection = {};

    for (let i = 0; i < sequence.length; i++) {
        let char = sequence[i];
        collection[char] = (collection[char] || []).concat(i);
    }

    Object.entries(collection).forEach(([char, keys]) => {
        console.log(`${char}:${keys.join('/')}`);
    });
}

serialize(['abababa', '']);