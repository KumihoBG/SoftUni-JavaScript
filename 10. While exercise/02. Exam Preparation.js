function exam(input) {
    let index = 0;
    let lowGradesCount = Number(input[index++]);
    let examName = input[index++];
    let gradeSum = 0;
    let gradeCount = 0;
    let problemsCount = 0;

    while (input[index] !== 'Enough' || gradeCount < lowGradesCount) {
        let grade = Number(input[index++]);
        problemsCount++;
        if (grade <= 4) {
            isLowGrade = true;
            gradeCount++;
        }
        gradeSum += grade;
        

        if (input[index] === 'Enough') {
            console.log(`Average score: ${(gradeSum / problemsCount).toFixed(2)}`);
            console.log(`Number of problems: ${problemsCount}`);
            console.log(`Last problem: ${examName}`);
            break;
        } else if (gradeCount >= lowGradesCount) {
            console.log(`You need a break, ${lowGradesCount} poor grades.`);
            break;
        }
        examName = input[index++];
    }
}

// exam(["3",
//     "Money",
//     "6",
//     "Story",
//     "4",
//     "Spring Time",
//     "5",
//     "Bus",
//     "6",
//     "Enough"
// ]);

exam(["2",
    "Income",
    "3",
    "Game Info",
    "6",
    "Best Player",
    "4"
]);