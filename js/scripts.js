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
  for(var x = 0; x < 3; x++) {
    board.push([]);
    for(var y = 0; y < 3; y++){
      board[x].push("");
    }
  }
  this.board = board;
};

Board.prototype.isSquareEmpty = function(square) {
  if (square === "") {
    return true;
  } else {
    return false;
  }
}
