function fishTank(arg1, arg2, arg3, arg4){
    let daljinaCm = arg1;
    let shirocinaCm = arg2;
    let visocinaCm = arg3;
    let percent = arg4;
    let obem = daljinaCm * shirocinaCm * visocinaCm;
    let totalLiters = obem * 0.001;
    let percentFinal = percent * 0.01;
    let finalLiters = totalLiters * (1-percentFinal);
    console.log(finalLiters);
}

fishTank("105",
"77",
"89",
"18.5");