
let guessWord
let guessed

// let play = function(guessWord) {
//   let container = document.getElementById("container");

//   // let guessArea = document.createElement("div")
//   // guessArea.id = "guessArea"
//   // container.append(guessArea)

//   container.style.display = "none"
//   game = document.getElementById("gameBox")
//   game.style.display = "block"
// }


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

  game.append(guessArea)
  guessed = "_".repeat(guessWord.length).split("").join(" ")
  guessArea.innerHTML = `<h2>${guessed}</h2>`
  console.log(guessWord)

  i = 0
  while (i < guessWord.length){

    document.addEventListener('keydown', function(event) {
      console.log('Key pressed: ', event.key);
      guessArea.innerHTML += event.key
      guessed += event.key
    });
  }
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