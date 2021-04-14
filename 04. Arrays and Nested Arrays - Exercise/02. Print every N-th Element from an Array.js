function printNth(array, number) {
    number = Number(number);
    let result = [];

    for (let i = 0; i < array.length; i += number) {
        let current = array[i];
        result.push(current);
    }
    return result;
}

console.log(printNth(['5', 
'20', 
'31', 
'4', 
'20'], 
2));