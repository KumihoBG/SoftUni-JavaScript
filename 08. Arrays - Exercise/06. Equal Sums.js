function equalSums(arr) {
    let leftSum = 0;
    let rightSum = 0;

    for (let j = 0; j < arr.length; j++) {
        rightSum = 0;
        if (arr.length == 1){
            console.log('At a[0] -> left sum = 0, right sum = 0');
            break;
        }
        let currentOne = arr[j];
        leftSum += currentOne;
        for (let i = arr.length-1; i > 0; i--){
            let currentTwo = arr[i];
            rightSum += currentTwo;
            if (rightSum == leftSum){
                console.log(arr[i-1]);
                break;
            }
        }
    }    
}

equalSums([1, 2, 3, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);