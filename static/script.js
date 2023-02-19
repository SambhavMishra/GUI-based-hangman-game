
let guessWord
let guessed

let isLetter;


// Check if the pushed button is a letter
try {
    const LETTER_EXPRESSION = /^\p{L}$/u; // Supported by ES6+, Some bugs in FF < 78

    isLetter = (character) => {
        return character && LETTER_EXPRESSION.test(character);
    };
} catch(e) {
  	console.log('Unicode flag in regular expressions are not supported. Used legacy isLetter() function.');

    isLetter = (character) => {
      	// it doesn't work for some alphabets but still enough in most cases
        return character && character.length === 1 && character.toLowerCase() !== character.toUpperCase();
    };
}

// Find all the indices at which a letter appears in the string
let findIndices = function(str,key) {
  let indices = [];
  for(let i=0; i<str.length;i++){
    if(str[i] === key) {
      indices.push(i);
    }
  }
  return indices
}


// Create as updateGuessed function
const updateGuessed = function(original, final, indices){
  let updated = original.split(" ")
  // console.log(`Updated : ${updated}`);
  for (let k = 0; k < indices.length; k++){
      updated[indices[k]] = final[indices[k]];
      // console.log(`Updating: ${updated}`);
  }
  original = updated.join(" ")
  return original
}





// This function starts the game
let play = function(guessWord) {
  let container = document.getElementById("container");
  if (container) {
    container.style.display = "none";
  }

  let game = document.getElementById("gameBox");
  if (game) {
    game.style.display = "block";
  }

  let guessArea = document.createElement("div")
  guessArea.id = "guessArea"
  container.append(guessArea)


  let ans = document.createElement("div");
  ans.id = "ans";
  game.append(ans)
  game.append(guessArea)
  guessed = "_".repeat(guessWord.length).split("").join(" ")
  // console.log(`${guessWord} is the guessWord`)
  // console.log(`Length of guessWord is ${guessWord.length}`);
  ans.innerHTML = `<h2>${guessed}</h2>`
  // console.log(typeof(guessed));

  let i = 0;
  let chances = guessWord.length + 5;
    document.addEventListener('keydown', function(event) {
      key = event.key;
      if (isLetter(key) && i < chances) {
        // console.log("key pressed : ", event.key)
        i++;

        // Print the key pressed in guessArea
        guessArea.innerText = event.key;

        // Check if the key pressed is present in the guessWord
        if (guessWord.includes(event.key)){
          // console.log(`${event.key} is present in ${guessWord}`);

          //  Find the indices at which the key pressed is present
          indices = findIndices(guessWord, event.key)
          // console.log(`The indices at which ${event.key} is present are: ${indices}`);

          //  Replace the indices with correct words in guessed
          guessed = updateGuessed(guessed, guessWord, indices)
          // console.log(`The updated guessed is: ${guessed}`);

          // Print the updated gussed into the ans
          ans.innerText = guessed;

          // If the guessed == guessWord the print winning message
          if (guessed.split(" ").join("") === guessWord) {
            ans.innerHTML += `<br>`
            ans.innerHTML += `<h2>Correct answer</h2>`
            guessArea.innerHTML = ""
            guessArea.innerHTML += "Press f5 to play again"
            i =  i + 15;
          }
        }
        }else if (i>= guessWord.length){
          guessArea.innerHTML = ""
          guessArea.innerHTML += "<br>"
          guessArea.innerHTML += "You have used all chances"
          guessArea.innerHTML += "<br>"
          guessArea.innerHTML += "Press f5 to play again"
          ans.innerHTML = guessWord
        }
    })
    
}










let start = function() {

    gameArea = document.getElementById("gameArea");
    gameArea.style.display = "block";
  
    // Make an AJAX request to the Flask endpoint
    fetch("/fetchWord/")
      .then(response => response.text())
      .then(data => {
        gameArea.innerHTML = data.trim();
        guessWord = data.trim()
        guessWord = guessWord.replace(/^"|"$/g,'');
        play(guessWord)
      });
  };