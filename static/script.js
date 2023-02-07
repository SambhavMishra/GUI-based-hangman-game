
let guessWord
let guessed

let isLetter;



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


let replace_ = function(original, replace, index, end) {
  let first = original.substr(0,index);
  let last = original.substr(index+1, end);
  let newString = first + replace + last;
  console.log(`First: ${first} Replace: ${replace} Index: ${index} Last: ${last}`);
  console.log(`Newstring: ${newString}`)
  return newString;
}


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

  // guessArea.innerHTML = guessWord

  let ans = document.createElement("div");
  ans.id = "ans";
  game.append(ans)
  game.append(guessArea)
  guessed = "_".repeat(guessWord.length).split("").join(" ")
  ans.innerHTML = `<h2>${guessed}</h2>`
  console.log(guessWord)

  let i = 0;
  let chances = guessWord.length + 5;
    document.addEventListener('keydown', function(event) {
      key = event.key;
      if (isLetter(key) && i < chances) {
        console.log("key pressed : ", event.key)
        guessArea.innerHTML = event.key ;
        guessed += event.key;
        // guessArea.innerHTML +=  guessWord.indexOf(key);
        i = i + 1;
        console.log(guessWord.includes(key));
        if (guessWord.includes(key)) {
          end = guessWord.length-1
          guessed = replace_(guessed, key, guessWord.indexOf(key), end);
          ans.innerHTML = guessed;
        }
      }
    })
  console.log(guessed)
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