function readingHours(arg1, arg2, arg3){
    let pagesAmount = Number(arg1);
    let pagesPerHour = Number(arg2);
    let daysNeeded = Number(arg3);
    let totalTime = pagesAmount/pagesPerHour;
    let result = totalTime/daysNeeded;
    console.log(result);
}

readingHours("432", "15", "4");