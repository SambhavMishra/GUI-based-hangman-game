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


// A function that shows the answer on the screen
let answer = document.createElement('div')
answer.id = 'answer'

const showAns = function (input) {
    answer.innerHTML = input.join(" ");
}


// This function picks up a random length word
const getword = function () {
    // letters = Math.random() * 5 + 3
    let letters = 7 
    let word = []
    for (let i = 0; i < letters; i++) {
        word.push("_")
    }
    return word
}

// the game start when this function runs
gameArea = document.createElement("div")
gameArea.id = "gameArea"
async function startGame() {
    await introduction()
    await delay(100)
    box.innerHTML += "So let us start...<br>"
    box.appendChild(gameArea)
    gameArea.appendChild(answer)
    showAns(getword())
};


// This function will replace character at a specific index
function replaceChar(origString, replaceChar, index)
{
    let firstPart = origString.substr(0, index);
     
    let lastPart = origString.substr(index + 1);

    let newString =
        firstPart + replaceChar + lastPart;
     
    return newString;
}


// This function finds all indices of a character in the string
const findIndices = function(string, character) {
    var indices = [];
    let changes = 0
    for(var i=0; i<string.length;i++) {
        if (string[i] === character) {
            indices.push(i);
            changes = changes + 1;
        }
    }
    return [indices, changes]
}

correctAns = "thought"

// This function runs after the start button is clicked
const playGame = async () => {
    await startGame()
    await delay(100)
    lifeline = 5
    mistakes = 0
    let word = "_".repeat(7)
    left = 7
    // console.log(typeof(word));
    // guessArea is where the input will appear

    guessArea = document.createElement("div")
    guessArea.id = "guessArea"
    gameArea.appendChild(guessArea)
    while (lifeline > mistakes && left > 0) {
        const ans = prompt("Guess a letter")
        if (correctAns.includes(ans, 0)) {
            console.log(`${ans} is correct`);
            guessArea.innerHTML = `<br>${ans} is correct`
            // index = correctAns.indexOf(ans)
            FI = findIndices(correctAns, ans)
            indices = FI[0]
            changes = FI[1]
            left = left - changes;
            console.log(left);
            for (let k = 0; k < indices.length; k++)
            {
                word = replaceChar(word, ans, indices[k]);
            }
            // console.log(word);
            showAns(word.split(""))
            await delay(100)
        }
        else {
            console.log(mistakes++);
            guessArea.innerHTML = `<br>That's ${mistakes} mistakes`
            await delay(100)
        }
    }

    if (left === 0){
        gameArea.innerHTML = "<h1>Congratulations! You guessed the word</h1>"
        gameArea.innerHTML += `<br>${correctAns.toUpperCase()}`
    }
    else {
        guessArea.innerHTML += "<br>Game over"
    }
}

playGame();