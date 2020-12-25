function arrayPreviousLess(nums) {
    let newArr = [];
    for (let i = 0; i < nums.length; i++){
        let currentNum = nums[i];
        let previousNum = nums[i-1];
        if (i == 0){
            newArr.unshift(-1);
        } else if (previousNum < currentNum){
            newArr.unshift(previousNum);
        }
        else if (previousNum > currentNum){
            newArr.unshift(-1);
        }
    }
    return newArr.reverse();
}

arrayPreviousLess([3, 5, 2, 4, 5]);