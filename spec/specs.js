describe('Player', function() {
    it("returns the player's mark", function() {
      var testPlayer = new Player("X");
      expect(testPlayer.mark).to.equal("X");
   });

   it("returns a starting message if it is 'X' or 'Y' to start with", function() {
     var testPlayer = new Player("X");
     expect(testPlayer.startMessage()).to.equal("X starts the game");
   });
});

describe('setMark', function() {
  it("returns a randomly selected 'X' or 'Y' mark", function() {
    expect(setMark()).to.be.a('string');
  });
});

// describe('getTurn', function() {
//   it("switches the player's turn", function() {
//   var testPlayer = new Player("X");
//   var mark =
//   expect(getTurn()).to.equal("Y");
//   });
// });
