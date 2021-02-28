function schoolGrade(input){
    let students = new Map();

    for (const student of input){
        let line = student.split(' ');
        let name = line.shift();
        let grades = line.map(Number);

        if (students.has(name)){
            let oldGrades = students.get(name);
            let allGrades = oldGrades.concat(grades);
            students.set(name, allGrades);
        } else {
            students.set(name, grades);
        }
    }
    let studentEntries = Array.from(students.entries());
    let sortedStudents = studentEntries.sort((a, b) => {
        let getAverageGradeA = getAverageGrade(a[1]);
        let getAverageGradeB = getAverageGrade(b[1]);
        return getAverageGradeA - getAverageGradeB;
    });

    for (const kvp of sortedStudents){
        console.log(`${kvp[0]}: ${kvp[1].join(', ')}`);
    }
    
    function getAverageGrade(grades){
        let gradesSum = grades.reduce((a, b) => a + b, 0);
        return gradesSum / grades.length;
    }
}

schoolGrade(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);