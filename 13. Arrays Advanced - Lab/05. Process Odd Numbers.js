function oddNumbers(arr){
    let result = arr.filter(oddNum);
    let newArr = result.map(element => element * 2);
    newArr.reverse();
    return newArr.join(' ');

    function oddNum(value, index){
        return (index % 2) == 1;
    }
}

// console.log(oddNumbers([10, 15, 20, 25]));
console.log(oddNumbers([3, 0, 10, 4, 7, 3])); // 6 8 0