function projects(param1, param2){
    let name = param1;
    let projectsAmount = param2;
    let totalHours = Number(param2 * 3);
    console.log(`The architect ${name} will need ${totalHours} hours to complete ${projectsAmount} project/s.`);
}

projects("George","9");