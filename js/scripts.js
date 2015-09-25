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

Board.prototype.markSquare = function(squareId, playerMark) {
 if (this.notMarked(squareId) === true) {
   return this.board[squareId] = playerMark;
 }
}

Board.prototype.notMarked = function(squareId) {
  if (this.getSquare([squareId]) == "") {
    return true;
  } else {
    return false;
  }
}


Board.prototype.checkSquareCombo1 = function() {
  var result = false;
  if (this.getSquare(0) == this.getSquare(1) && this.getSquare(2) == this.getSquare(0) && this.getSquare(1) == this.getSquare(2)) {
        result = true;
  }
  return result;
}

Board.prototype.checkIfComboOneMarked = function() {
  var result = false;
  if (this.notMarked(0) === false || this.notMarked(1) === false || this.notMarked(2) === false) {
    result = true;
  }
  return result;
}

Board.prototype.wonSquareCombo1 = function(playerMark) {
  if (this.getSquare(0) == playerMark) {
    this.winner = playerMark;
    return true;
  }
}

Board.prototype.gameWon = function() {
  var result = false;
  if (this.checkIfComboOneMarked() === true && this.checkSquareCombo1() === true) {
      result = true;
  }
  return result;
}

Board.prototype.isWinner = function(playerMark) {
  var winner = false;
  if (this.wonSquareCombo1(playerMark)) {
      // this.checkSquareCombo(3, 4, 5, playerMark) ||
      // this.checkSquareCombo(6, 7, 8, playerMark) ||
      // this.checkSquareCombo(0, 3, 6, playerMark) ||
      // this.checkSquareCombo(1, 4, 7, playerMark) ||
      // this.checkSquareCombo(2, 5, 8, playerMark) ||
      // this.checkSquareCombo(0, 4, 8, playerMark) ||
      // this.checkSquareCombo(2, 4, 6, playerMark)) {
        winner = true;
      }
      return winner;
}

$(document).ready(function() {
  var mark = setMark();
  var player = new Player(mark);
  var board = new Board();

  $("#play").click(function(event) {
    event.preventDefault();
    $("div#starting-message").empty();

    var message = player.startMessage();
    $("div#starting-message").append(message).show();



    $("td#0").on("click", function() {
      if (board.gameWon() === true) {
        alert(board.winner + " has already won the game. Start a new game!");
      }

      var mark = player.getMark();

      if (board.notMarked(0) === true && board.gameWon() === false) {
          $("td#0").text(board.markSquare(0, mark));
          board.markSquare(0, mark);
          if(board.wonSquareCombo1(mark) === true && board.gameWon() === true) {
            alert(mark + " won the game");
          }
        }
        // else {
        //   alert("This square is already taken");
        // }

        player.switchTurn();
  });

    $("td#1").on("click", function() {

      if (board.gameWon() === true) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else {

      var mark = player.getMark();

      if(board.notMarked(1) === true && board.gameWon() === false) {
        $("td#1").text(board.markSquare(1, mark));
        if(board.wonSquareCombo1(mark) === true && board.gameWon() === true) {
          alert(mark + " won the game");
        }
      }

      // else if (board.notMarked(1) === false && board.gameWon() === false) {
      //     alert("This square is already taken");
      // }
    player.switchTurn();
  }
    });

    $("td#2").on("click", function() {
      if (board.gameWon() === true) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else {
      var mark = player.getMark();
      if(board.notMarked(2) === true && board.gameWon() === false) {
        $("td#2").text(board.markSquare(2, mark));
        if(board.wonSquareCombo1(mark) === true && board.gameWon() === true) {
          alert(mark + " won the game");
        }
      }
    player.switchTurn();
  }
    });

    $("td#3").on("click", function() {
      if (board.gameWon() === true) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else {
      var mark = player.getMark();
      if(board.notMarked(3) === true) {
      $("td#3").text(board.markSquare(3, mark));
    } else {
      alert("This is not an empty square");
    }
    player.switchTurn();
  }
    });

    $("td#4").on("click", function() {
      if (board.gameWon() === true) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else {
      var mark = player.getMark();
      if(board.notMarked(4) === true) {
      $("td#4").text(board.markSquare(4, mark));
    } else {
      alert("This is not an empty square");
    }
    player.switchTurn();
  }
    });

    $("td#5").on("click", function() {
      if (board.gameWon() === true) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else {
      var mark = player.getMark();
      if(board.notMarked(5) === true) {
      $("td#5").text(board.markSquare(5, mark));
    } else {
      alert("This is not an empty square");
    }
    player.switchTurn();
  }
    });

    $("td#6").on("click", function() {
      if (board.gameWon() === true) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else {
      var mark = player.getMark();
      if(board.notMarked(6) === true) {
      $("td#6").text(board.markSquare(6, mark));
    } else {
      alert("This is not an empty square");
    }
    player.switchTurn();
  }
    });

    $("td#7").on("click", function() {
      if (board.gameWon() === true) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else {
      var mark = player.getMark();
      if(board.notMarked(7) === true) {
      $("td#7").text(board.markSquare(7, mark));
    } else {
      alert("This is not an empty square");
    }
    player.switchTurn();
  }
    });

    $("td#8").on("click", function() {
      if (board.gameWon() === true) {
        alert(board.winner + " has already won the game. Start a new game!");
      } else {
      var mark = player.getMark();
      if(board.notMarked(8) === true) {
      $("td#8").text(board.markSquare(8, mark));
    } else {
      alert("This is not an empty square");
    }
    player.switchTurn();
  }
    });

  });
});
