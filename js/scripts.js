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
  for (var i = 1; i < 10; i++) {
    board.push(i);
  }
  this.board = board;
}
