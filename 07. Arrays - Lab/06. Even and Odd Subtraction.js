function evenOddSubstraction(arr){
    let evenSum = 0;
    let oddSum = 0;
    let difference = 0;
    for (i = 0; i <arr.length; i++){
        let current = arr[i];
        if(current % 2 == 0){
            evenSum += current;
        } else {
            oddSum += current
        }
    }
    difference = evenSum - oddSum;
    console.log(difference);
}

evenOddSubstraction([1,2,3,4,5,6]);
evenOddSubstraction([3,5,7,9]);
evenOddSubstraction([2,4,6,8,10]);