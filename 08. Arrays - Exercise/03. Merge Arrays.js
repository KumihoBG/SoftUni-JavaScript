function mergeArrays(arr1, arr2){
    let merged = [];
    let currentOne = "";
    let currentTwo = "";
    let sumEven = 0;
    let sumOdd = 0;
    let index = 0;
    
    for (let i = 0; i < arr1.length; i++){
        currentOne = arr1[i];
        while (true){
            currentTwo = arr2[index];
            if (index > i){
                break;
            }
            if (i == 0 && index == 0 || i % 2 == 0 && index % 2 == 0){
                sumEven = Number(currentOne) + Number(currentTwo);
                merged.push(sumEven);
            }
            else {
                sumOdd = currentOne + currentTwo;
                merged.push(sumOdd);
            } 
            currentTwo = arr2[index++];   
        }
    }
    console.log(merged.join(" - "));
}

mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
);