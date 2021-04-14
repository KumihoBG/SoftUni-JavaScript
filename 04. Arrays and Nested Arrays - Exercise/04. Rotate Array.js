function rotateArray(input, number) {
    number = Number(number);

    for (let i = 0; i < number; i++) {
        let lastEl = input.pop();
        input.unshift(lastEl);
    }
    console.log(input.join(' '));
}

rotateArray(['1', 
'2', 
'3', 
'4'], 
2
);