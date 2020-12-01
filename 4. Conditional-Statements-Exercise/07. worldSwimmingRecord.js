function worldRecord(arg1, arg2, arg3) {
    let recordSeconds = Number(arg1);
    let distanceMeters = Number(arg2);
    let timeSeconds = Number(arg3);
    let neededSeconds = distanceMeters * timeSeconds;
    let delay = Math.floor(distanceMeters / 15);
    let finalSeconds = delay * 12.5;
    let totalTime = (neededSeconds + finalSeconds).toFixed(2);
    if (totalTime < recordSeconds){
        console.log(`Yes, he succeeded! The new world record is ${totalTime} seconds.`);
    }
    else {
        let secondsNeeded = (totalTime - recordSeconds).toFixed(2);
        console.log(`No, he failed! He was ${secondsNeeded} seconds slower.`);
    }
}

// worldRecord("10464","1500","20");
worldRecord("55555.67","3017","5.03");
