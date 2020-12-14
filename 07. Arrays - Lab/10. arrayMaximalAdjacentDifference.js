function arrayMaxDifference(nums){
    let result = 0;
    let maxDifference = 0;

    for (let i = 0; i < nums.length; i++) {
        result = Math.abs(nums[i] - nums[i + 1]);
        if (result > maxDifference){
            maxDifference = result;
        } else {
            result = maxDifference;
        }
    }
console.log(maxDifference);
}

arrayMaxDifference([2, 4, 1, 0]);
arrayMaxDifference([2, 9, 1, 0]);
