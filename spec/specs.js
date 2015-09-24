describe('Player', function() {
    it("returns the player's mark", function() {
      var testPlayer = new Player("X");
      expect(testPlayer.mark).to.equal("X");
   });

   it("returns a starting message if it is 'X' or 'O' to start with", function() {
     var testPlayer = new Player("X");
     expect(testPlayer.startMessage()).to.equal("X starts the game");
   });

   it("switches turns for the player", function() {
     var testPlayer = new Player("X");
     testPlayer.switchTurn();
     expect(testPlayer.mark).to.equal("O");
   });
});

describe('setMark', function() {
  it("returns a randomly selected 'X' or 'O' mark", function() {
    expect(setMark()).to.be.a('string');
  });
});

describe('Board', function() {
  it("returns an array of empty squares", function() {
    var testBoard = new Board();
    expect(testBoard.board).to.eql(["", "", "", "", "", "", "", "", ""]);
  });

  it("returns a square with the given id", function() {
    var testBoard = new Board();
    expect(testBoard.getSquare(1)).to.equal("");
  });

  it("markes square with player's mark if square is empty", function() {
    var testBoard = new Board();
    testBoard.markSquare(2, "X");
    expect(testBoard.board[2]).to.equal("X");
    expect(testBoard.board[1]).to.equal("");
  });

  it("returns true if three squares are marked with same marker", function() {
    var testBoard = new Board();
    expect(testBoard.checkSquareCombo(1, 2, 3, "")).to.equal(true);
  });

  it("returns true if player won the game", function(playerMark) {
    var testBoard = new Board();
    testBoard.markSquare(0, "X");
    testBoard.markSquare(1, "X");
    testBoard.markSquare(2, "X");
    testBoard.checkSquareCombo(0, 1, 2, "X");
    expect(testBoard.isWinner("X")).to.equal(true);
  });

});
