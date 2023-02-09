
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


let findIndices = function(str,key) {
  let indices = [];
  for(let i=0; i<str.length;i++){
    if(str[i] === key) {
      indices.push(i);
    }
  }
  return Array(indices);
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
  console.log(`${guessed} is a ${typeof(guessed)}`)
  ans.innerHTML = `<h2>${guessed}</h2>`
  console.log(guessWord)

  let i = 0;
  let chances = guessWord.length + 5;
    document.addEventListener('keydown', function(event) {
      key = event.key;
      if (isLetter(key) && i < chances) {
        console.log("key pressed : ", event.key)
        guessArea.innerHTML = event.key ;
        i = i + 1;
        console.log(guessWord.includes(key));
        if (guessWord.includes(key)) {
          end = guessWord.length-1;
          indices = findIndices(guessWord,key)
          console.log(`${indices} is ${typeof(indices)}`)
          let guessedArray = Array();
          for(let i=0; i<indices.length; i++) {
            console.log(`${indices[i]}`);
            
          }
          guessed = guessedArray.join(' ');
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