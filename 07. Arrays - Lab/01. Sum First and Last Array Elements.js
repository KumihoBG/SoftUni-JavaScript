function sumArrayElements(str){
    let firstNum = Number(str[0]);
    let lastNum = Number(str[str.length - 1]);
    let sum = firstNum + lastNum;
    console.log(sum);
}

sumArrayElements(["20", "30", "40"]);
sumArrayElements([10, 17, 22, 33]);
sumArrayElements([11, 58, 69]);