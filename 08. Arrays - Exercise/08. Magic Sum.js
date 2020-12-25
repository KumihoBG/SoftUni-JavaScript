function magicNum(input, magicNum){
    let sum = 0;
    for (let i = 0; i < input.length-1; i++){
        let current = input[i];
        for (let j = i + 1; j < input.length; j++){
            let next = input[j];
            sum = current + next;
            if (sum == magicNum){
                console.log(`${current} ${next}`);
            }
        }

    }
}

// magicNum([1, 7, 6, 2, 19, 23], 8);
magicNum([14, 20, 60, 13, 7, 19, 8], 27);