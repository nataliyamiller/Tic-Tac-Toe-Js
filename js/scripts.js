function Player(mark) {
  this.mark = mark;
}

Player.prototype.startMessage = function() {
  return this.mark + " starts the game";
}

Player.prototype.switchTurn = function() {
  if (this.mark === "X") {
    this.mark = "O";
  } else {
    this.mark = "X";
  }
}

// function Board() {
//   var board = [];
//   for(var x = 0; x < 3; x++) {
//     board.push([]);
//     for(var y = 0; y < 3; y++){
//       board[x].push("");
//     }
//   }
//   this.board = board;
// };

var setMark = function() {
  if (Math.random() < 0.5) {
    return "X";
  } else {
    return "O";
  }
}

function Board() {
  var board = [];
  for (var i = 0; i < 9; i++) {
    board.push("");
  }
  this.board = board;
}

Board.prototype.getSquare = function(squareId) {
  return this.board[squareId];
}

Board.prototype.markSquare = function(squareId, playerMark) {
  if (this.getSquare([squareId]) == "") {
   this.board[squareId] = playerMark;
  } else {
    return "You can't move to this square, it has already been played";
  }
}

Board.prototype.checkSquareCombo = function(id1, id2, id3, playerMark) {
  var squareCombo = false;
  if (this.getSquare(id1) == playerMark &&
      this.getSquare(id1) == playerMark &&
      this.getSquare(id2) == playerMark) {
    squareCombo = true;
  }
  return squareCombo;
}

// Board.prototype.winningCombo = function() {
//   var winningCombo = [];
//   winningCombo.push([0, 1, 2]);
//   winningCombo.push([3, 4, 5]);
//   winningCombo.push([6, 7, 8]);
//   winningCombo.push([0, 3, 6]);
//   winningCombo.push([1, 4, 7]);
//   winningCombo.push([2, 5, 8]);
//   winningCombo.push([0, 4, 8]);
//   winningCombo.push([2, 4, 6]);
//   return winningCombo;
// }

Board.prototype.isWinner = function(playerMark) {
  var winner = false;
  if (this.checkSquareCombo(0, 1, 2, playerMark) ||
      this.checkSquareCombo(3, 4, 5, playerMark) ||
      this.checkSquareCombo(6, 7, 8, playerMark) ||
      this.checkSquareCombo(0, 3, 6, playerMark) ||
      this.checkSquareCombo(1, 4, 7, playerMark) ||
      this.checkSquareCombo(2, 5, 8, playerMark) ||
      this.checkSquareCombo(0, 4, 8, playerMark) ||
      this.checkSquareCombo(2, 4, 6, playerMark)) {
        winner = true;
      }
      return winner;
}
