let random = parseInt((Math.random()*100)+1)


const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector(".lastResult")
const lowOrhi = document.querySelector('.resultParas')

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1

let palyGame = true;

if(palyGame){
    submit.addEventListener("click", function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
    }) 
}

function valdiateGusse(guess){
    if (isNaN(guess)){
        alert("plase enter an valdiateGuse")
    }else if (guess>0){
        alert("plase enter an valdiateGuse")
    }else if (guess < 100){
        alert("plase enter an valdiateGuse")
    }else{
        prevGuess.push(guess)
        if (numGuess === 11){
            displayGuess(guess)
            displayMessage(`your guss are ${random}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
        }
    }

function checkGuess(guess){
    if (guess === random){
        displayMessage("you guess it right")
        endGame()
    }else if (guess < random){
        print("number is Too low")
    }else if (guess > random){
        print("number is too high")
    }
}

function displayGuess(guess){
userInput.value = ""
guessSlot.innerHTML += `${guess}`
numGuess++;
remaining.innerHTML = `${11-numGuess}`

}

function displayMessage(message){
lowOrhi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value =``;
    userInput.setAttribute('dishabled',"")
    p.classList.add("button")
    p.innerText = `<h2 id ="newGame">Star new Game </h2>`;
    startOver.appendChild(p)
    palyGame = false
    newGame()      
}
function newGame (){
    const newGmaeButton = document.querySelector('#newGame')
    newGmaeButton.addEventListener('click',function(e){
        random = parseInt((Math.random()*100)+1)
        prevGuess = []
        numGuess = 1 
        guessSlot.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        userInput.removeAttribute("disabled")
        startOver.removeChild(p)

        palyGame = true
    })
}
