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
    expect(testBoard.board).to.eql([["", "", ""], ["", "", ""], ["", "", ""]]);
  });
  it("returns true is square is empty or false if sqare has already been marked", function() {
    var testBoard = new Board();
    var square = testBoard.board[0][0];
    expect(testBoard.isSquareEmpty(square)).to.equal(true);
  })
});
