function onTime(arg1, arg2, arg3, arg4) {
    let examHour = Number(arg1);
    let examMinute = Number(arg2);
    let arivalHour = Number(arg3);
    let arivalMinute = Number(arg4);
    let totalExamTime = (examHour * 60) + examMinute;
    let totalArivalTime = (arivalHour * 60) + arivalMinute;
    let timeDifference = Math.abs(totalExamTime - totalArivalTime);


    if (totalExamTime > totalArivalTime && timeDifference > 30) {
        console.log("Early");
        if (timeDifference >= 60) {
            let hour = Math.floor(timeDifference / 60);
            let minutes = timeDifference % 60;

            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            console.log(`${hour}:${minutes} hours before the start`);

        } else {
            console.log(`${timeDifference} minutes before the start`);
        }    

    } else if (totalArivalTime > totalExamTime){
        console.log("Late");
        timeDifference = Math.abs(timeDifference);
        if (timeDifference >= 60) {
            let hour = Math.floor(timeDifference / 60);
            let minutes = timeDifference % 60;
            if (minutes < 10) {
                minutes = `0${minutes}`;
            }
            console.log(`${hour}:${minutes} hours after the start`);
        } else {
            console.log(`${timeDifference} minutes after the start`);
        }
    } else {
        console.log("On time");
        if (timeDifference !== 0) {
            console.log(`${timeDifference} minutes before the start`);
        }
    }
}

onTime("9", "30", "9", "50");
// onTime("9", "00", "8", "30");
// onTime("16", "00", "15", "00");
// onTime("9", "00", "10", "30");
// onTime("14", "00", "13", "55");
// onTime("11", "30", "8", "12");
// onTime("10", "00", "10", "00");
// onTime("11", "30", "10", "55");
// onTime("11", "30", "12", "29");







