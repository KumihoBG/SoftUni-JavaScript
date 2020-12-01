function sum(arg){
    let n = Number(arg);
    let sum = 0;
    let oddNum = 0;
    let counter = 0;

    for (let i = 0; i <= 100; i++){
        if (counter === n){
            break;
        }
        if (i % 2 !== 0){
            oddNum = i;
            console.log(oddNum);
            sum += oddNum;
            counter++;
        }  
    }
    console.log(`Sum: ${sum}`);
}

sum(5);