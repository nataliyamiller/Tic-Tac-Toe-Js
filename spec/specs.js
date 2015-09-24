describe('Player', function() {
    it("returns the player's mark", function() {
      var testPlayer = new Player("X");
      expect(testPlayer.mark).to.equal("X");
   });
});


describe('startMessage', function() {
  it("returns a starting message whowing who's turn is first, 'X' or 'Y'", function() {
    expect(startMessage("X")).to.be.a('string');
  })
})
