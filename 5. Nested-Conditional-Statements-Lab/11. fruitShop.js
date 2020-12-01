function fruitShop (arg1, arg2, arg3){
    let fruit = arg1;
    let day = arg2;
    let quantity = Number(arg3);
    let price = 0;
    let isWorkingDay = 
    day === "Monday" || day === "Tuesday" || 
    day === "Wednesday" || day === "Thursday" || 
    day === "Friday";
    let isWeekend = 
    day === "Saturday" || 
    day === "Sunday";

    if (isWorkingDay)
    switch (fruit) {
        case "banana": console.log(price = (quantity * 2.5).toFixed(2)); break;
        case "apple": console.log(price = (quantity * 1.2).toFixed(2)); break;
        case "orange": console.log(price = (quantity * 0.85).toFixed(2)); break;
        case "grapefruit": console.log(price = (quantity * 1.45).toFixed(2)); break;
        case "kiwi": console.log(price = (quantity * 2.7).toFixed(2)); break;
        case "pineapple": console.log(price = (quantity * 5.5).toFixed(2)); break;
        case "grapes": console.log(price = (quantity * 3.85).toFixed(2)); break; 
        default: console.log('error'); break;   
    }
    else if (isWeekend)
    switch (fruit) {
        case "banana": console.log(price = (quantity * 2.7).toFixed(2)); break;
        case "apple": console.log(price = (quantity * 1.25).toFixed(2)); break;
        case "orange": console.log(price = (quantity * 0.90).toFixed(2)); break;
        case "grapefruit": console.log(price = (quantity * 1.60).toFixed(2)); break;
        case "kiwi": console.log(price = (quantity * 3).toFixed(2)); break;
        case "pineapple": console.log(price = (quantity * 5.6).toFixed(2)); break;
        case "grapes": console.log(price = (quantity * 4.2).toFixed(2)); break; 
        default: console.log('error'); break;   
    }
    else {
        console.log('error');
    }
}

fruitShop("apple","Tuesday","2");
fruitShop("orange","Sunday","3");
fruitShop("kiwi","Monday","2.5");
fruitShop("grapes","Saturday","0.5");
fruitShop("tomato","Monday","0.5");




