
describe("Location", function() {
  it("creates a new object with location, time of year, and landmark values", function() {
    var testLocation = new Location("Portland", "January", "Steel Bridge");
    expect(testLocation.city).to.equal("Portland");
    expect(testLocation.month).to.equal("January");
    expect(testLocation.landmark).to.equal("Steel Bridge");
  });
});
