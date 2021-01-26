function sortSmallest(arr){
    let sorted = arr.sort((a, b) => {
        return a-b;
    })

    let result = sorted.slice(0,2).join(' ');
    return result;
}

console.log(sortSmallest([30, 15, 50, 5]));