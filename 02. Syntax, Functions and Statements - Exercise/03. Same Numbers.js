function sameNumbers(input) {
    let nums = input.toString();
    let isSame = false;
    let sum = 0;
    let count = 0;

    for (let i = 0; i < nums.length; i++) {
        let current = Number(nums[i]);
        let next = Number(nums[i + 1]);
        sum += current;
     
        if (isNaN(next)) {
            break;
        } else if (current === next) {
            isSame = true;
        } else if (current !== next) {
            isSame = false;
            count++;
        }
    }

    if (count > 0) {
        console.log('false');
    } else {
        console.log('true');
    }
    console.log(sum);
}

sameNumbers(1234);