let randomNum = parseInt(Math.random()*100+1)
// console.log(randomNum);

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")  
const guessSlot = document.querySelector(".guesses")  
const remaining = document.querySelector(".lastResult")  
const lowOrHi = document.querySelector(".lowOrHi")
const startOver = document.querySelector(".resultParas")

const p = document.createElement("p")

let prevGuess = [];
let numGuess = 1;
let playGame = true;

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess= parseInt(userInput.value)
        // console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){ //will be used repitatively in WebDev
    //to check valid number - abc , <=0, >100, etc

    if(isNaN(guess)){
        alert("Please enter a valid number")
    }else if(guess<1){
        alert("Please enter a number more than  0.")
    }else if(guess>100){
        alert("Please enter a number less than 100.")
    }else {
        
        if(numGuess>10){
            // displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randomNum}`)
            endGame();
        }else {
            prevGuess.push(guess)
            displayGuess(guess)
            checkGuess(guess)
        }
    }


    
}

function checkGuess(guess){
    //check guess is low or High or correct
    if(guess===randomNum){
        displayMessage("You guessed it right")
        endGame();

    }else if(guess < randomNum){
        displayMessage("Number is too low")

    }else if(guess > randomNum){
        displayMessage("Number is too high")
    }
}

function displayGuess(guess){
    //clean up guess
   ///this will interact with dom. userInput value is emptied, innerHTML guess added, numbers made less
   userInput.value = '';        
//    console.log(guess);
   guessSlot.innerHTML = `${prevGuess}`;
   remaining.innerHTML = `${10-numGuess}`;
   numGuess++;
}

function displayMessage(message){
    //low or hi message
    lowOrHi.innerHTML = `<h2>${message}</h2>`

} 


function endGame(){
    //
    userInput.value = ''
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML = '<h2 id = "newGame">Start new game</h2>';
    startOver.appendChild(p) //p was in global scope , we created p element in start, we put h2 elemnt inside it, and a class of button, and id of newgame and then appended it in original HTML.
    playGame = false
    newGame()
}


function newGame(){
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
      randomNum = parseInt(Math.random() * 100 + 1);
    //   console.log(randomNum);
      prevGuess = [];
      numGuess = 1;
      guessSlot.innerHTML = '';
      remaining.innerHTML = `${10 - numGuess} `;
      userInput.removeAttribute('disabled');
      startOver.removeChild(p);
  
      playGame = true;
    });
}

