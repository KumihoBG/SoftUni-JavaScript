function biggerNumber(arg1, arg2, arg3){
    let array = [arg1, arg2, arg3].sort();
    let maxNumber = Number.MIN_SAFE_INTEGER;

    for (let i = 0; i < array.length; i++){
        let currentNum = Number(array[i]);
        if (currentNum > maxNumber) {
            maxNumber = currentNum;
        }
    }
    console.log(maxNumber);
}

biggerNumber(-2, 7, 3);
biggerNumber(130, 5, 99);
biggerNumber(43, 43.2, 43.1);