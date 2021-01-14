function power(array, n) {
    let result = 0;
    let limit = array.length;

    for (let i = 0; i <= n; i++) {
        if (n === i) {
            result = Math.pow(array[i], n);
        } else if (n >= limit){
            result = -1;
            break;
        }
    }
    return result;
}

power([1, 2, 3, 4], 2);
power([75,68,35,61,9,36,89,0,30], 10);
power([7,4,8,10,8],5)