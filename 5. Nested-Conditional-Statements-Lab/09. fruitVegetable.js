function checkProduct(arg) {
    let product = arg;

    switch (product) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes": console.log('fruit'); break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot": console.log('vegetable'); break;
        default: console.log('unknown'); break;
    }
}

checkProduct("banana");
checkProduct("apple");
checkProduct("tomato");
checkProduct("water");
