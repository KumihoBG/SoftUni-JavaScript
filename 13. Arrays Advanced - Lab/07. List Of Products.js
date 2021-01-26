function products(arr){
    let printLine = "";
    let newArr = arr.sort();
    for (let i = 0; i < newArr.length; i++){
        let value = newArr[i];
        printLine += `${i + 1}.${value} \n`;
    }
    console.log(printLine);
}

products(["Potatoes", "Tomatoes", "Onions", "Apples"]);