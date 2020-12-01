function tradeCommissions(arg1, arg2) {
    let city = arg1;
    let sales = Number(arg2);
    let commission = 0;

    if (sales >= 0 && sales <= 500) {
        switch (city) {
            case "Sofia":  console.log(commission = (sales * 0.05).toFixed(2)); break;
            case "Varna":  console.log(commission = (sales * 0.045).toFixed(2)); break;
            case "Plovdiv":  console.log(commission = (sales * 0.055).toFixed(2)); break;
            default:console.log('error');break;
        }
    }	
    else if (sales > 500 && sales <= 1000){
        switch (city) {
            case "Sofia":  console.log(commission = (sales * 0.07).toFixed(2)); break;
            case "Varna":  console.log(commission = (sales * 0.075).toFixed(2)); break;
            case "Plovdiv":  console.log(commission = (sales * 0.08).toFixed(2)); break;
            default:console.log('error');break;
        }
    }
    else if	(sales > 1000 && sales <= 10000) {
        switch (city) {
            case "Sofia":  console.log(commission = (sales * 0.08).toFixed(2)); break;
            case "Varna":  console.log(commission = (sales * 0.1).toFixed(2)); break;
            case "Plovdiv":  console.log(commission = (sales * 0.12).toFixed(2)); break;
            default:console.log('error');break;
        }
    }	
    else if (sales > 10000){
        switch (city) {
            case "Sofia":  console.log(commission = (sales * 0.12).toFixed(2)); break;
            case "Varna":  console.log(commission = (sales * 0.13).toFixed(2)); break;
            case "Plovdiv":  console.log(commission = (sales * 0.145).toFixed(2)); break;
            default:console.log('error');break;
        }
    }
    else {
        console.log('error');
    }
}

// tradeCommissions("Sofia","1500");
// tradeCommissions("Plovdiv","499.99");
tradeCommissions("Varna","3874.50");
tradeCommissions("Kaspichan","-50");



