function negativePositive(arr){
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        let current = arr[i];
        if(current < 0){
            newArr.unshift(current);
        } else {
            newArr.push(current);
        }
    }
    newArr = newArr.join("\n")
    return newArr;
}

console.log(negativePositive([7, -2, 8, 9]));
console.log(negativePositive([3, -2, 0, -1]));