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

  // it("returns true is square is empty or false if sqare has already been marked", function() {
  //   var testBoard = new Board();
  //   expect(testBoard.isSquareEmpty(2)).to.equal(true);
  // });

  it("markes square with player's mark if square is empty", function() {
    var testBoard = new Board();
    testBoard.markSquare(2, "X");
    expect(testBoard.board[2]).to.equal("X");
    expect(testBoard.board[1]).to.equal("");
  });
});
