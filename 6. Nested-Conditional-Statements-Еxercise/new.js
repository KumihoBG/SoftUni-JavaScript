function exam(input1, input2, input3, input4) {
    let exam_hours = Number(input1);
    let exam_minutes = Number(input2);
    let arrival_hours = Number(input3);
    let arrival_minutes = Number(input4);

    let total_exam_min = exam_hours * 60 + exam_minutes;
    let total_arrival_min = arrival_hours * 60 + arrival_minutes;
    let hours_left = 0;
    let min_left = 0;

    let diff = Math.abs(total_exam_min - total_arrival_min);

    if (total_arrival_min > total_exam_min) {
        console.log("Late")
        if (diff >= 60) {
            hours_left = diff / 60;
            min_left = diff % 60;
            if (min_left < 10) {
                console.log(`${hours_left}:0${min_left} hours after the start`);
            } else {
                console.log(`${hours_left}:${min_left} hours after the start`);
            }
        } else {
            console.log(`${diff} minutes after the start`);
            }
    } else if (total_arrival_min == total_exam_min) {
        console.log("On time")
    } else if (total_arrival_min < total_exam_min) {
        if (diff <= 30) {
            console.log("On time")
            console.log(`${diff} minutes before the start`)
        } else {
            if (diff >= 60) {
                hours_left = diff / 60;
                min_left = diff % 60;
                if (min_left < 10) {
                    console.log("Early")
                    console.log(`${hours_left}:0${min_left} hours before the start`)
                } else {
                    console.log("Early")
                    console.log(`${hours_left}:${min_left} hours before the start`)
                }
            } else {
                console.log("Early")
                console.log(`${diff} minutes before the start`);
            }
        }
    }
}

exam("9","30","9","50");
exam("9","00","8","30");
exam("16","00","15","00");
exam("9","00","10","30");
exam("14","00","13","55");
exam("11","30","8","12");
exam("10","00","10","00");
exam("11", "30", "10", "55");
exam("11","30","12","29");
