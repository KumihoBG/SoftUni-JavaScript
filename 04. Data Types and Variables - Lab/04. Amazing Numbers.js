function amazingNums(num){
    let str = num.toString();
    let sum = 0;
    let isAmazing = false;
    let tf = "";


    for(let i = 0; i < str.length; i++){
        let nums = Number(str[i]);
        sum += nums;
    }

    let result = sum.toString();
    if(result.includes('9')){
        isAmazing = true;
        tf = "True";
    } else {
        isAmazing = false;
        tf = "False";
    }
    console.log(`${str} Amazing? ${tf}`);
}

amazingNums(1233);
amazingNums(999);