function countVowelConsonant(str) {
    let vowels = str;
    let sum = 0;
    for (i = 0; i < vowels.length; i++) {
        switch (vowels.charAt(i)) {
            case "a": sum += 1; break;
            case "e": sum += 1; break;
            case "i": sum += 1; break;
            case "o": sum += 1; break;
            case "u": sum += 1; break;
            default: sum += 2; break;
        }
    }
    return sum; 
  }

  countVowelConsonant('abcde');