
    var randomNum = Math.random()*100;
    randomNum = Math.ceil(randomNum);

    var guess;
    var tryGuss = 0;
    var gotGuess = false;
    while(tryGuss != 3 || gotGuess != true){
        guess = prompt("Guess the number under 100");
        guess = parseInt(guess);
        tryGuss+=1;
        if(randomNum == guess){
            gotGuess = true;
            alert("You are right, You won");
        }
    }

