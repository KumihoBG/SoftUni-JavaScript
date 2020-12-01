function walking(input) {
    let index = 0;
    let goal = 10000;
    let steps = Number(input[index++]);
    let sumSteps = 0;
    let stepsOver = 0;
    let stepsMade = 0;
    let stepsToHome = 0;

    while (sumSteps <= goal) {
        sumSteps += steps;
       
        if (input[index] === "Going home"){
            index++;
            stepsToHome = Number(input[index++]);
            stepsMade = sumSteps + stepsToHome;
            stepsOver = Math.abs(goal - stepsMade);
            break;
        }
        else if (sumSteps > goal) {
            stepsOver = Math.abs(goal - sumSteps);
            break;
        }
        else {
            steps = Number(input[index++]);
        }
    }

    if (sumSteps > goal || stepsMade > goal){
        console.log('Goal reached! Good job!');
        console.log(`${stepsOver} steps over the goal!`);
    }
    else {
        console.log(`${stepsOver} more steps to reach goal.`);
    }
}

walking(["1000",
"1500",
"2000",
"6500"]);

walking(["1500",
"3000",
"250",
"1548",
"2000",
"Going home",
"2000"]);

walking(["1500",
"300",
"2500",
"3000",
"Going home",
"200"]);

walking(["125",
"250",
"4000",
"30",
"2678",
"4682"]);

