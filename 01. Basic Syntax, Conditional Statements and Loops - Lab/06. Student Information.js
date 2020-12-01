function students(arg1, arg2, arg3){
    let name = arg1;
    let age = Number(arg2);
    let avarageNum = Number(arg3).toFixed(2);
    console.log(`Name: ${name}, Age: ${age}, Grade: ${avarageNum}`);
}

students('John', 15, 5.54678);