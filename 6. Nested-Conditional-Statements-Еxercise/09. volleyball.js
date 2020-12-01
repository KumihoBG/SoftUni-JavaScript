function valleyball(arg1, arg2, arg3) {
    let year = arg1;
    let holidays = Number(arg2);
    let homeTownWeekends = Number(arg3);
    let totalWeekends = 48;
    let playHomeTown = totalWeekends - homeTownWeekends;
    let weenedsAtHome = totalWeekends - playHomeTown;
    let playSofia = playHomeTown * 0.75;
    let playInSofia = holidays * 0.6666666666666667;
    let totalGames = weenedsAtHome + playInSofia + playSofia;
    let leapGames = 0;
    if (year === "leap") {
        leapGames = totalGames * 0.15;
    }
    else if(year === "normal"){
        totalGames = totalGames;
    }
    let yearGames = Math.floor(totalGames + leapGames);
    console.log(yearGames);
}

valleyball("leap","5","2");
valleyball("normal","3","2");
valleyball("normal","11","6");
valleyball("leap","0","1");
valleyball("normal","6","13");


