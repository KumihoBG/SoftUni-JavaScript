function oddEvenSum(input, magicNum){
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