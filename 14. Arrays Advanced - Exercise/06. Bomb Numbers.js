function bombNus(arr, bomb) {
    let num = bomb[0];
    let bombPower = bomb[1];
    let index = arr.indexOf(num);
    let afterIndex = index + bombPower;
    let start = arr.splice(0, index - bombPower);
    let end = arr.splice(afterIndex);
    let result = start.concat(end);
    let sum = 0;
    isIncluded(arr);
    isIncluded(result);
        
    function isIncluded(arr){
        if (arr.includes(num)){
            arr.splice(index, 1);
            for (let i = 0; i < result.length; i++){
                let current = Number(result[i]);
                sum += current;
            }
        }
    }
    console.log(sum);;
}

// bombNus([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
// bombNus([1, 4, 4, 2, 8, 9, 1], [9, 3]);
bombNus([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]);