function timeToWalk(steps, lengthMeters, speed) {
    let distance = steps * lengthMeters;
    let restSeconds = Math.floor(distance / 500);
    let speedMeters = speed / 3.6;
    let timeNeeded = 0;
    timeNeeded = Math.ceil(distance / speedMeters) + restSeconds * 60;

    let timeHours = Math.floor(timeNeeded / 3600);
    let timeMinutes = Math.floor(timeNeeded / 60);
    let timeSeconds = Math.ceil(timeNeeded % 60);
    
    console.log(`${timeHours < 10 ? 0 : ""}${timeHours}:${timeMinutes < 10 ? 0 : ""}${timeMinutes}:${timeSeconds < 10 ? 0 : ""}${timeSeconds}`);
}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);