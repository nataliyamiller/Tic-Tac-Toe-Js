function Player(mark) {
  this.mark = mark;
}

Player.prototype.startMessage = function() {
  return '"' + this.mark + '" starts the game';
}

Player.prototype.getMark = function() {
  return this.mark;
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
  var player = new Player(setMark());
  var board = [];
  for (var i = 0; i < 9; i++) {
    board.push("");
  }
  this.board = board;
  this.player = player;
  this.winner = null;
}

Board.prototype.getSquare = function(squareId) {
  return this.board[squareId];
}

Board.prototype.setEmptySquare = function(squareId) {
  return this.board[squareId] = ""
}

Board.prototype.notMarked = function(squareId) {
  if (this.getSquare([squareId]) == "") {
    return true;
  } else {
    return false;
  }
}

Board.prototype.markSquare = function(squareId, playerMark) {
 if (this.notMarked(squareId) === true) {
   return this.board[squareId] = playerMark;
 }
}

Board.prototype.checkSquareCombo = function(id1, id2, id3) {
  var result = false;
  if (this.getSquare(id1) == this.getSquare(id2) && this.getSquare(id3) == this.getSquare(id1)) {
    result = true;
  }
  return result;
}

Board.prototype.checkSquareCombos = function() {
  var result = false;
  if ((this.checkSquareCombo(0, 1, 2)) ||
      (this.checkSquareCombo(3, 4, 5)) ||
      (this.checkSquareCombo(6, 7, 8)) ||
      (this.checkSquareCombo(0, 3, 6)) ||
      (this.checkSquareCombo(1, 4, 7)) ||
      (this.checkSquareCombo(2, 5, 8)) ||
      (this.checkSquareCombo(0, 4, 8)) ||
      (this.checkSquareCombo(2, 4, 6))) {
        result = true;
      }
      return result;
}

Board.prototype.checkRow = function(a, b, c, move) {
  var result = false;
  if (this.getSquare(a) == move && this.getSquare(b) == move && this.getSquare(c) == move) {
    result = true;
  }
  return result;
}

Board.prototype.checkWinner= function(move) {
  var result = false;
  if (this.checkRow(0, 1, 2, move) ||
      this.checkRow(3, 4, 5, move) ||
      this.checkRow(6, 7, 8, move) ||
      this.checkRow(0, 3, 6, move) ||
      this.checkRow(1, 4, 7, move) ||
      this.checkRow(2, 5, 8, move) ||
      this.checkRow(0, 4, 8, move) ||
      this.checkRow(2, 4, 6, move)) {
        this.winner = move;
        result = true;
      }
      return result;
}

Board.prototype.startOver = function() {
  // this.getSquare(0) = "";
  this.winner = null;
  for (var i = 0; i < 9; i++) {
    $("td#" + i).text("");
    this.setEmptySquare(i);
  }
  this.gameWon() = false;
}

// function allEmptyAtFirst() {
//   for (var i = 0; i < 9; i++) {
//     document.getElementById(i).innerText = "";
//   }
// }

$(document).ready(function() {
$("div#starting-message").hide();
var mark = setMark();
var player = new Player(mark);
var board = new Board();

  $("#play").click(function(event) {
    event.preventDefault();

    if (board.winner != null) {
      board.startOver();
    }



    $("div#starting-message").empty();

    var message = player.startMessage();
    $("div#starting-message").append(message).show();



    $("td#0").on("click", function() {
      if (board.winner != null) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else if ((board.notMarked(0) === true && board.checkWinner(mark) === false)) {
        $("td#0").text(board.markSquare(0, mark));
        player.switchTurn();
        if(board.checkWinner(mark) === true) {
          alert(mark + " won the game");
        }
      } else {
          alert("This square is already taken");
      }
  });

    $("td#1").on("click", function() {
      if (board.winner != null) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else if ((board.notMarked(1) === true && board.checkWinner(mark) === false)) {
        var mark = player.getMark()
        $("td#1").text(board.markSquare(1, mark));
        player.switchTurn();
        if(board.checkWinner(mark) === true) {
          alert(mark + " won the game");
        }
      } else {
          alert("This square is already taken");
      }
    });

    $("td#2").on("click", function() {
      if (board.winner != null) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else if ((board.notMarked(2) === true && board.checkWinner(mark) === false)) {
        var mark = player.getMark()
        $("td#2").text(board.markSquare(2, mark));
        player.switchTurn();
        if(board.checkWinner(mark) === true) {
          alert(mark + " won the game");
        }
      } else {
          alert("This square is already taken");
      }
    });

    $("td#3").on("click", function() {
      if (board.winner != null) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else if (board.notMarked(3) === true && board.checkWinner(mark) === false) {
        var mark = player.getMark()
        $("td#3").text(board.markSquare(3, mark));
        player.switchTurn();
        if(board.checkWinner(mark) === true) {
          alert(mark + " won the game");
        }
      } else {
          alert("This square is already taken");
      }
    });

    $("td#4").on("click", function() {
      if (board.winner != null) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else if (board.notMarked(4) === true &&  board.checkWinner(mark) === false) {
        var mark = player.getMark()
        $("td#4").text(board.markSquare(4, mark));
        player.switchTurn();
        if(board.checkWinner(mark) === true) {
          alert(mark + " won the game");
        }
      } else {
          alert("This square is already taken");
      }
    });

    $("td#5").on("click", function() {
      if (board.winner != null) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else if (board.notMarked(5) === true && board.checkWinner(mark) === false) {
        var mark = player.getMark()
        $("td#5").text(board.markSquare(5, mark));
        player.switchTurn();
        if(board.checkWinner(mark) === true) {
          alert(mark + " won the game");
        }
      } else {
          alert("This square is already taken");
      }
    });

    $("td#6").on("click", function() {
      if (board.winner != null) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else if (board.notMarked(6) === true && board.checkWinner(mark) === false) {
        var mark = player.getMark()
        $("td#6").text(board.markSquare(6, mark));
        player.switchTurn();
        if(board.checkWinner(mark) === true) {
          alert(mark + " won the game");
        }
      } else {
          alert("This square is already taken");
      }
    });

    $("td#7").on("click", function() {
      if (board.winner != null) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else if (board.notMarked(7) === true && board.checkWinner(mark) === false) {
        var mark = player.getMark()
        $("td#7").text(board.markSquare(7, mark));
        player.switchTurn();
        if(board.checkWinner(mark) === true) {
          alert(mark + " won the game");
        }
      } else {
          alert("This square is already taken");
      }
    });

    $("td#8").on("click", function() {
      if (board.winner != null) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else if (board.notMarked(8) === true && board.checkWinner(mark) === false) {
        var mark = player.getMark()
        $("td#8").text(board.markSquare(8, mark));
        player.switchTurn();
        if(board.checkWinner(mark) === true) {
          alert(mark + " won the game");
        }
      } else {
          alert("This square is already taken");
      }
  });
  });

});
