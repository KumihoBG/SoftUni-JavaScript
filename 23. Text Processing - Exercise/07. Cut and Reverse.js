function cutReverse(str) {
    let index = Math.ceil(str.length / 2);
    let resultOne = str.slice(index).split('').reverse().join('');
    let resultTwo = str.slice(0, index).split('').reverse().join('');
    console.log(resultTwo + '\n' + resultOne);
}

// cutReverse('tluciffiDsIsihTgnizamAoSsIsihT');
cutReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');