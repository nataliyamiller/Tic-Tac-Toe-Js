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
  it("returns board as an array table squares", function() {
    var testBoard = new Board();
    expect(testBoard.board).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    expect(testBoard.board.length).to.equal(9);
  });
});
