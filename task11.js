function isVowel(str){
    var vowel;
    switch(str){
        case "a":
            vowel = true;
            break;
        case "A":
            vowel = true;
            break;
        case "e":
            vowel = true;
            break;
        case "E":
            vowel = true;;
            break;
        case "i":
            vowel = true;
            break;
        case "I":
            vowel = true;
            break;
        case "o":
            vowel = true;
            break;
        case "O":
            vowel = true;
            break;
        case "u":
            vowel = true;
            break;
        case "U":
            vowel = true;
            break;
    }
    return !!vowel;
}
console.log(isVowel("U"));