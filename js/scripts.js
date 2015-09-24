function Player(mark) {
  this.mark = mark;
}

var startMessage = function(mark) {
  return mark + " starts the game";
}


var setMark = function() {
  if (Math.random() < 0.5) {
    return "X";
  } else {
    return "Y";
  }
}
