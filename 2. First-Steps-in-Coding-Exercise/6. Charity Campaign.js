function charityCampaign(arg1, arg2, arg3, arg4, arg5) {
    let amountDays = parseInt(arg1);
    let amountPeople = arg2;
    let cakeAmount = arg3 * 45;
    let gofreti = arg4 * 5.8;
    let pancakes = arg5 * 3.2;
    let findProducts = (cakeAmount + gofreti + pancakes) * amountPeople; 
    let totalSum = parseFloat(findProducts * amountDays);
    let afterExpenses = totalSum / 8;
    let result = totalSum - afterExpenses;
    console.log(result);
} 

charityCampaign("131", "5", "9", "33", "46");