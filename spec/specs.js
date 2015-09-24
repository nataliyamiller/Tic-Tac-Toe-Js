describe('Player', function() {
    it("returns the player's mark", function() {
      var testPlayer = new Player("X");
      expect(testPlayer.mark).to.equal("X");
   });
});


describe('startMessage', function() {
  it("returns a starting message whowing who's turn is first, 'X' or 'Y'", function() {
    expect(startMessage("X")).to.equal("X starts the game");
  });
});

describe('setMark', function() {
  it("returns a randomly selected 'X' or 'Y' mark", function() {
    expect(setMark()).to.be.a('string');
  });
});
