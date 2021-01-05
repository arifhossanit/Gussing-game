function guessNumber() {
    const random = Math.floor(Math.random() * 10) + 1;
    let attempt = 1;

    
    while(attempt <= 3) {
        let number = parseInt(prompt('Guess a number from 1 to 10: '));

        if(number == random && attempt==1) {
            document.getElementById("show").innerHTML = "You guessed the correct <br> number & score is 100%."+'<br><button onclick="guessNumber()" type="button" class="btn btn-secondary m-auto d-block">Play Again</button>';
            break;
        } else if(number == random && attempt==2) {
            document.getElementById("show").innerHTML = "<br>You guessed the correct <br> number & score is 67%."+'<br><br><button onclick="guessNumber()" type="button" class="btn btn-secondary m-auto d-block">Play Again</button>';
            break;
        } else if(number == random && attempt==3) {
            document.getElementById("show").innerHTML = "<br>You guessed the correct <br> number & score is 33%."+'<br><br><button onclick="guessNumber()" type="button" class="btn btn-secondary m-auto d-block">Play Again</button>';
            break;
        }else if(number < random && attempt==3) {
            document.getElementById("show").innerHTML = "<br>Your score is 0."+'<br><br><button onclick="guessNumber()" type="button" class="btn btn-secondary m-auto d-block">Play Again</button> ';
        } else if(number > random && attempt==3) {
            document.getElementById("show").innerHTML = "<br>Your score is 0."+'<br><br><button onclick="guessNumber()" type="button" class="btn btn-secondary m-auto d-block">Play Again</button>';
        }else if(number < random) {
            window.alert('You guessed the lower number.')
        } else if(number > random) {
            window.alert('You guessed the higher number.')
        }
        attempt++;
    }
  }
