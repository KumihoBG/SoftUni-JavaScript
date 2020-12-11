function binary(binary){
    binary = binary;
    let decimal = 0;
    let sumDigits = 0;
    let power = binary.length - 1;

    for(let i = 0; i < binary.length; i++){
        let current = Number(binary[i]);
        sumDigits = current * Math.pow(2, power);
        decimal += sumDigits;
        power--;
    }
    console.log(decimal);
}

binary("00001001");
binary("11110000");