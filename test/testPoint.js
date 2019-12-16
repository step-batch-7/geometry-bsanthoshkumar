const assert = require("chai").assert;
const Point = require("../src/point");

describe("Point", function() {
  describe("toString", function() {
    it("should give string representation of given point", function() {
      const point = new Point(2, 3);
      assert.strictEqual(point.toString(), `Point @(2,3)`);
    });
  });

  describe("isEqualTo", function() {
    it("should give true if both points are equal points", function() {
      const point1 = new Point(4, 5);
      const point2 = new Point(4, 5);
      assert.ok(point1.isEqualTo(point2));
    });
  });

  describe("clone", function() {
    it("should give copy of same point", function() {
      const point = new Point(3, 4);
      const actual = point.clone();
      assert.deepStrictEqual(actual, point);
      assert.notEqual(actual, point);
    });
  });
});
