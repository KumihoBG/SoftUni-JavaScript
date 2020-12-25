function alphabetSubsequence(str) {
    let result = false;

    for (let i = 0; i < str.length - 1; i++) {
        let current = str.charCodeAt(i);
        let next = str.charCodeAt(i + 1);
        if (next < current){
            result = false;
            break;
        }
        if (current != next) {
            result = true;
        } else if (current == next) {
            result = false;
            break;
        }
    }
    return result;
}


alphabetSubsequence('effg');
alphabetSubsequence('cdce');
alphabetSubsequence('ace');