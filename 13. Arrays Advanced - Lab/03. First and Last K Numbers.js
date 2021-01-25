function firstLastK(arr){
    let k = arr[0];
    let firstLine = arr.slice(1,k+1).join(' ');
    console.log(firstLine);
    let secondLine = arr.slice(-k).join(' ');
    console.log(secondLine);
}

firstLastK([2, 7, 8, 9]);