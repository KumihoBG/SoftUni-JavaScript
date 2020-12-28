function printNElement(arr){
    let n = Number(arr[arr.length-1]);
    let newStr = [];
    for (let i = 0; i < arr.length-1; i += n){
        newStr.push(arr[i]);
    }
    console.log(newStr.join(' '));
}

printNElement(['5', '20', '31', '4', '20', '2']);
printNElement(['dsa', 'asd', 'test', 'test', '2']);
printNElement(['1', '2', '3', '4', '5', '6']);