function sumSeconds(arg1, arg2, arg3) {
    let first = Number(arg1);
    let second = Number(arg2);
    let third = Number(arg3);
    let totalSeconds = first + second + third;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;
    if (seconds < 10){
        console.log(`${minutes}:0${seconds}`);
    }
    else{
        console.log(`${minutes}:${seconds}`);
    }   
}

sumSeconds("35", "45", "44");
sumSeconds("22", "7", "34");
sumSeconds("50", "50", "49");
sumSeconds("14", "12", "10");

