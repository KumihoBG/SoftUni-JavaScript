function sumOfTwo(nums1, nums2, value) {
    let sum = 0;
    let result = false;
    for (let i = 0; i < nums1.length; i++){
        if (result == true){
            break;
        }
        let currentOne = nums1[i];
        for (let j = 0; j < nums2.length; j++){
            let currentTwo = nums2[j];
            sum = currentOne + currentTwo;
            if (sum == value){
                result = true;
                break;
            } else {
                result = false;
            }
        }
    }
    return result;
}

sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42)