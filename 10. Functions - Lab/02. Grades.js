function grade(arg){
    let fGrade = Number(arg);
    if (fGrade < 3){
    console.log(`Fail (2)`);
    } else if (fGrade >= 3 && fGrade < 3.5){
        console.log(`Poor (${fGrade.toFixed(2)})`);
    } else if (fGrade >= 3.50 && fGrade < 4.5){
        console.log(`Good (${fGrade.toFixed(2)})`);
    } else if (fGrade >= 4.5 && fGrade < 5.5){
        console.log(`Very good (${fGrade.toFixed(2)})`);
    } else if (fGrade >= 5.5){
        console.log(`Excellent (${fGrade.toFixed(2)})`);
    }
}

grade("4.5");