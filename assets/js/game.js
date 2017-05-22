// Globals
var word = ['snuffy'][0].split('')
var hint = ['He might do smack?']
var answer = setString(word.length)
var guessArray = []
var guessesCount = 11

// Calls
document.getElementById('Hint').innerText = hint
updateElements()

//  Functions

//  onKeyUp event listener
function keyWasPressed (e) {
  var letter = String.fromCharCode(e.keyCode).toLowerCase()
  updateElements()
  findLetter(letter)
  document.getElementById('Guess--Input').value = ''
}

// set string
function setString (length) {
  var array = []
  for (var i = 0; i < length; i++) {
    array.push('_')
  }
  return array
}

// for placing array
function updateElements () {
  document.getElementById('answerArray').innerText = answer.join('')
  document.getElementById('guessArray').innerText = guessArray
  document.getElementById('guessCount').innerText = guessCount()
  checkWinner()
}

// search word for matching letter
function findLetter (letter) {
  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      answer[i] = letter.toUpperCase()
    }
  }
  guessArray.push(letter.toUpperCase())
}

function guessCount () {
  guessesCount -= 1
  return guessesCount
}

function checkWinner () {
  var str = document.getElementById('answerArray').innerText
  if (guessesCount === 0) {
    alert('You are out of guess, better luck next time sucka!!!')
    restart()
  } else if (!str.includes('_')) {
    alert('You are the Winner!!!')
    restart()
  }
}

function restart () {
  answer = setString(word.length)
  guessArray = []
  guessesCount = 11
  updateElements()
}

function setWordHint () {
  // randomly choose a new word and Hint when page loads
}
