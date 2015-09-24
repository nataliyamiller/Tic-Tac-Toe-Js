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

Board.prototype.markSquare = function(squareId, playerMark) {
  if (this.board[squareId] == "") {
   this.board[squareId] = playerMark;
  } else {
    return "You can't move to this square, it has already been played";
  }
}
