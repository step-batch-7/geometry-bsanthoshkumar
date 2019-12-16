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
    it("should give true for equal points of same instance", function() {
      const point1 = new Point(4, 5);
      const point2 = new Point(4, 5);
      assert.ok(point1.isEqualTo(point2));
    });

    it("should give false for non equal points instance", function() {
      const point1 = new Point(4, 5);
      const point2 = new Point(5, 5);
      assert.notOk(point1.isEqualTo(point2));
    });

    it("should give false for equal points of different instance", function() {
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

  describe("visit", function() {
    it("should perform given sum operation and give sum of x and y of point", function() {
      const point = new Point(3, 4);
      const actual = point.visit((x, y) => x + y);
      assert.strictEqual(actual, 7);
    });

    it("should perform given multiply operation and give sum of x and y of point", function() {
      const point = new Point(3, 4);
      const actual = point.visit((x, y) => x * y);
      assert.strictEqual(actual, 12);
    });
  });
});
