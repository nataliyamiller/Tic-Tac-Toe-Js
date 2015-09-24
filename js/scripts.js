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

Board.prototype.checkSquareCombination = function(id1, id2, id3) {
  var winningCombination = false;
  if (this.getSquare(id1) == this.getSquare(id2) &&
  this.getSquare(id1) == this.getSquare(id3) &&
  this.getSquare(id2) == this.getSquare(id3)) {
    winningCombination = true;
  }
  return winningCombination;
}
