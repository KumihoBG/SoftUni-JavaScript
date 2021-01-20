function loadingBar(num){
    num = num / 10;
    let left = ".";
    let print = "[";
    let percent = (`${num * 10}% [%`);
    let secondLine = "Still loading...";
    let isComplete = false;

    for (let j = 1; j < num; j++){
        if (num == 10){
            isComplete = true;
            print += "%";
        } else if (num < 10) {
            percent += "%";
        }
    }
    for (let k = 0; k < 10-num; k++){
        percent += left;
    }

    print += "]";
    percent += "]";

    if (isComplete == true){
        console.log('100% Complete!');
        console.log(print);
    } else if (isComplete == false){
        console.log(percent);
        console.log(secondLine);
    } 
}

loadingBar(10);
loadingBar(100);
loadingBar(30);