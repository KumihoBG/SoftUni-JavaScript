function addSubstract(arr) {
    let modifiedArr = [];
    let sum = 0;
    let totalSum = 0;
    let newSum = 0;

    for (let i = 0; i < arr.length; i++){
        totalSum += arr[i];
        if (arr[i] % 2 == 0){
            sum = arr[i] + arr.indexOf(arr[i]);
            modifiedArr.push(sum);
            newSum += sum;
        } else if (arr[i] % 2 != 0){
            sum = arr[i] - arr.indexOf(arr[i]);
            modifiedArr.push(sum);
            newSum += sum;
        }
    }
    console.log(modifiedArr);
    console.log(totalSum);
    console.log(newSum);
}

// addSubstract([5, 15, 23, 56, 35]);
addSubstract([-5, 11, 3, 0, 2]);