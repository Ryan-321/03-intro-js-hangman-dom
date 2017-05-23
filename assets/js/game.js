// game object
var game = {
  words: [ 'snuffleupagus', 'countvoncount', 'abbycadabby' ],
  word: '',
  hints: [ 'He might do smack?', "He's got a night job", 'She can do a wee bit of magic' ],
  hint: '',
  guessArray: [],
  guessesCount: 5,
  answer: '',
  start: function () {
    this.setWordHint()
    this.answer = this.setString(this.word.length)
    this.updateElements()
  },
  keyWasPressed: function (e) {
    var letter = String.fromCharCode(e.keyCode).toLowerCase()
    this.findLetter(letter)
    this.updateElements()
    document.getElementById('Guess--Input').value = ''
    this.checkWinner()
  },
  setWordHint: function () {
    var num = Math.floor((Math.random() * 3))
    this.word = this.words[num]
    this.hint = this.hints[num]
  },
  setString: function (length) {
    var array = []
    for (var i = 0; i < length; i++) {
      array.push('_')
    }
    return array
  },
  updateElements: function () {
    document.getElementById('answerArray').innerText = this.answer.join('')
    document.getElementById('guessArray').innerText = this.guessArray
    document.getElementById('guessCount').innerText = this.guessesCount
    document.getElementById('Hint').innerText = this.hint
  },
  findLetter: function (letter) {
    var letterNotFound = true
    for (var i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter) {
        letterNotFound = false
        this.answer[i] = letter.toUpperCase()
      }
    }
    if (letterNotFound) { this.guessCount() }
    this.guessArray.push(letter.toUpperCase())
  },
  guessCount: function () {
    this.guessesCount -= 1
    return this.guessesCount
  },
  checkWinner: function () {
    var str = document.getElementById('answerArray').innerText
    if (this.guessesCount === 0) {
      alert('You are out of guess, better luck next time sucka!!!')
      this.restart()
    } else if (!str.includes('_')) {
      alert('You are the Winner!!!')
      this.restart()
    }
  },
  restart: function () {
    this.guessArray = []
    this.guessesCount = 11
    this.setWordHint()
    this.answer = this.setString(this.word.length)
    this.updateElements()
  }
}

// Call
game.start()
