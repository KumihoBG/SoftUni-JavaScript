function graduate(input){
    let index = 0;
    let name = input[index++];
    let annualGrade = Number(input[index++]);
    let sumGrades = 0;
    let counterGrades = 1;
    let averageGrade = 0;
    let isExcluded = false;

    while (counterGrades <= 12) {
        if (annualGrade < 4){
            isExcluded = true;
            console.log(`${name} has been excluded at ${counterGrades} grade`);
            break;
        }
        sumGrades += annualGrade;
        averageGrade = sumGrades / 12;
        counterGrades++;
        annualGrade = Number(input[index++]);
    }
    if (!isExcluded){
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }   
}

graduate(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"]);

graduate(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);
