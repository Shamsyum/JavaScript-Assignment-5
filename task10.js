function countVowel(str){
    var counter = 0;
    for(var i=0; i<str.length; i++){
        switch(str[i]){
            case "a":
                counter++;
                break;
            case "A":
                counter++;
                break;
            case "e":
                counter++;
                break;
            case "E":
                counter++;
                break;
            case "i":
                counter++;
                break;
            case "I":
                counter++;
                break;
            case "o":
                counter++;
                break;
            case "O":
                counter++;
                break;
            case "u":
                counter++
                break;
            case "U":
                counter++;
                break;
        }
        }
    console.log(counter + " Vowels");
}

countVowel("A quick brown fox jumps to our lazy dog");