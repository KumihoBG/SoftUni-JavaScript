function trainers(input) {
    let index = 0;
    let jury = input[index++];
    let text = input[index++];
    let numberEvaluations = 0;
    let grade = 0;
    let averageGradeText = 0;
    let totalGrade = 0;
    let absoluteGrade = 0;
    let textCount = 0;

    while (text !== "Finish") {
        numberEvaluations = Number(jury);
        for (i = 0; i < numberEvaluations; i++) {
            grade = Number(input[index++]);
            averageGradeText += grade;
            totalGrade = averageGradeText / numberEvaluations;
        }
        console.log(`${text} - ${totalGrade.toFixed(2)}.`);
        absoluteGrade += totalGrade;
        text = input[index++];
        averageGradeText = 0;
        totalGrade = 0;
        textCount++;
    }
    text = input[index++];
    absoluteGrade = Number(absoluteGrade / textCount).toFixed(2)
    console.log(`Student's final assessment is ${absoluteGrade}.`);
}

// trainers(["2",
// "While-Loop",
// "6.00",
// "5.50",
// "For-Loop",
// "5.84",
// "5.66",
// "Finish"]);

trainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"]);

// trainers(["2",
// "Objects and Classes",
// "5.77",
// "4.23",
// "Dictionaries",
// "4.62",
// "5.02",
// "RegEx",
// "2.88",
// "3.42",
// "Finish"]);
