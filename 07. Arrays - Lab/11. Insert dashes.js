function insertDashes(arr) {
    let index = 0;
    let newArray = arr.toString();
    let finalArray = newArray[index++];
    for (i = 0; i < newArray.length-1; i++){
        if (newArray[i] % 2 != 0 && newArray[i + 1] % 2 != 0){
            finalArray += '-';
        }
        finalArray += newArray[index++];
    }
   console.log(finalArray);
}

insertDashes("aba caba");