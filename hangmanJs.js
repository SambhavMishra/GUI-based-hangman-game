const box = document.createElement("div")
box.id = "box"
document.body.appendChild(box)

header = document.createElement("H2")
box.appendChild(header)
// This is the heading
header.innerHTML = "Guess the WORD or leave the WORLD<hr>"


// This function is used to create time delay
const delay = ms => new Promise(res => setTimeout(res, ms));



// This function writes instructions for the game
async function introduction() {
    await delay(100);
    box.innerHTML += "<br>Guess the characters in sequence that will make the correct word<br>"
    await delay(100);
    box.innerHTML += "You get have 5 lifelines<br>"
    await delay(100);
    box.innerHTML += "if you are wrong the sixth time.....<br>"
    await delay(100);
    box.innerHTML += "Oh the guy is HANGED!!!!<br>"
}



// the game start when this function runs
async function startGame(){
    await introduction()
    await delay(100)
    box.innerHTML += "So let us start...<br>"
    letters = Math.random()*5+3 
    let word = []
    for (let i = 0; i<letters; i++){
        word.push("_")
    }
    gameArea = document.createElement("div")
    gameArea.id = "gameArea"
    box.appendChild(gameArea)
    gameArea.innerHTML += word.join(" ")
  };

word = "sambhav"


// This function runs after the start button is clicked
const playGame = async() => {
    await startGame()
    await delay(100)
    lifeline = 5
    mistakes = 0

    // guessArea is where the input will appear
    guessArea = document.createElement("div")
    guessArea.id = "guessArea"
    gameArea.appendChild(guessArea)
    while (lifeline > mistakes){
        answer = document.getElementById("answer")
        guessArea.appendChild(answer)
        guess = answer.innerHTML
    }
    guessArea.innerHTML += "<br>Game over"
}

playGame();