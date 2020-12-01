function scholarship(arg1, arg2, arg3) {
    let incomeBGN = Number(arg1);
    let grades = Number(arg2);
    let minimumSalary = Number(arg3);
    let socialScholarship = minimumSalary * 0.35;
    let gradeScholarship = grades * 25;
    let isSocialScholarship = incomeBGN < minimumSalary && grades > 4.5;
    let isGradeScholarship = grades >= 5.5;

    if ( isSocialScholarship  &&  isGradeScholarship && gradeScholarship >= socialScholarship){
        console.log(`You get a scholarship for excellent results ${Math.floor(gradeScholarship)} BGN`);
    }
    else if (isSocialScholarship && socialScholarship > gradeScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } 
    else if (isGradeScholarship) {
        console.log(`You get a scholarship for excellent results ${Math.floor(gradeScholarship)} BGN`);
    } 
    else if (isSocialScholarship){
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    }
    else {
        console.log("You cannot get a scholarship!");
    }
}

scholarship("480.00","4.60","450.00");
// scholarship("300.00", "5.65", "420.00");
// scholarship("600.00", "5.80", "480.00");