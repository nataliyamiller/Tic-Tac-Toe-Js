function Player(mark) {
  this.mark = mark;
}

Player.prototype.startMessage = function() {
  return this.mark + " starts the game";
}

var setMark = function() {
  if (Math.random() < 0.5) {
    return "X";
  } else {
    return "Y";
  }
}

// var getTurn = function() {
//
// }
