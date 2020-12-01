function workingHours(arg1, arg2) {
    let hour = Number(arg1);
    let day = arg2;
    if(hour >= 10 && hour <= 18){
        switch (day) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday": console.log('open'); break;
            default: console.log('closed'); break;
        }
            // if(day === "Monday" || day === "Tuesday" || 
            // day === "Wednesday" || day === "Thursday" || 
            // day === "Friday" || day === "Saturday"){
    }
    else {
        console.log('closed');
    }
}

// workingHours("11","Monday");
// workingHours("19","Friday");
// workingHours("11","Sunday");
workingHours("19", "Friday");


