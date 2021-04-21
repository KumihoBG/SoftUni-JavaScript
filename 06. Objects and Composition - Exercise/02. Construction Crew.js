function constructionCrew(obj) {
    let worker = Object.assign({}, obj);
    let thursty = worker.dizziness;
    if (thursty === true) {
        let kg = worker.weight;
        let exp = worker.experience;
        let waterIntake = (0.1 * kg) * exp;
        worker.levelOfHydrated += waterIntake;
        worker.dizziness = false;
    }
    return worker;
}

console.log(constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
}));