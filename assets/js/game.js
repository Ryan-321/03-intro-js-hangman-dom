var word = ['snuffy'][0].split('')
var hint = ['He might do smack?']
var answer = setString(word.length)
var guessArray = []

document.getElementById('Hint').innerText = hint
updateArrays()

//  onKeyUp event listener
function keyWasPressed (e) {
  var letter = String.fromCharCode(e.keyCode).toLowerCase()
  findLetter(letter)
  updateArrays()
}

// set array
function setString (length) {
  var array = []
  for (var i = 0; i < length; i++) {
    array.push('_')
  }
  return array
}

// for placing array
function updateArrays () {
  document.getElementById('answerArray').innerText = answer.join('')
  document.getElementById('guessArray').innerText = guessArray
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
