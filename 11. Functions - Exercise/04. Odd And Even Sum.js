function oddEvenSum(num){
    let arr = num.toString();
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < arr.length; i++){
        let current = Number(arr[i]);
        if (current % 2 != 0){
            sumOdd += current;
        } else {
            sumEven += current;
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`);
}

oddEvenSum(1000435);
oddEvenSum(3495892137259234);