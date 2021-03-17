function removeOccurences(word, text) {
    let old;
    while (old !== text) {
        old = text;
        text = text.replace(word, '');
    }
    console.log(text);
}

removeOccurences("ice", "kicegiciceeb");
removeOccurences("plet", "peterpletpleteprezpetpletapreplita");
removeOccurences("top", "8718718top71agagag8787abatop0t0p")