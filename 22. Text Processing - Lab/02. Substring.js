function subString(string, startIndex, count) {
    startIndex = Number(startIndex);
    count = Number(count);
    return string.substring(startIndex, startIndex + count);
}

console.log(subString("ASentance", 1, 8));