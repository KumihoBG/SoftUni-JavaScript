function reverseString(str1, str2, str3) {
    let stringRes = str1 + str2 + str3;
    let result = stringRes.split('').reverse().join(' ');
    console.log(result);
}

reverseString('1',
'L',
'&');