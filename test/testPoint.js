const assert = require("chai").assert;
const Point = require("../src/point");

describe("Point", function() {
  describe("toString", function() {
    it("should give string representation of given point", function() {
      const point = new Point(2, 3);
      assert.strictEqual(point.toString(), `Point @(2,3)`);
    });
  });
});
