function adjacentElementsProduct(nums) {
    let product = 0;
    let result = 0;

    for (let i = 0; i < nums.length - 1; i++) {
        num1 = nums[i++];
        num2 = nums[i];
        product = num1 * num2;
        if (product > result) {
            result = product;
        } else {
            product = product;
        }
        num1 = nums[i--];
        product = 0;
    }
   console.log(result);;
}

adjacentElementsProduct([3, 6, -2, -5, 7, 3]);