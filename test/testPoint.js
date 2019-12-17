const assert = require("chai").assert;
const Point = require("../src/point");
const Line = require("../src/line");
const Circle = require("../src/circle");

describe("Point", function() {
  describe("toString", function() {
    it("should give string representation of given point", function() {
      const point = new Point(2, 3);
      assert.strictEqual(point.toString(), `[Point @(2,3)]`);
    });
  });

  describe("isEqualTo", function() {
    it("should give true for equal points of same instance", function() {
      const point1 = new Point(4, 5);
      const point2 = new Point(4, 5);
      assert.ok(point1.isEqualTo(point2));
    });

    it("should give false for non equal points of same instance", function() {
      const point1 = new Point(4, 5);
      const point2 = new Point(5, 5);
      assert.notOk(point1.isEqualTo(point2));
    });

    it("should give false for equal points of different instance", function() {
      const point1 = new Point(4, 5);
      const point2 = { x: 4, y: 5 };
      assert.notOk(point1.isEqualTo(point2));
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

  describe("findDistanceTo", function() {
    it("should give distance b/w two points", function() {
      const point1 = new Point(2, 3);
      const point2 = new Point(6, 9);
      assert.approximately(point1.findDistanceTo(point2), 7, 0.5);
    });

    it("should give distance 0 for same point", function() {
      const point1 = new Point(2, 3);
      const point2 = new Point(2, 3);
      assert.approximately(point1.findDistanceTo(point2), 0, 0);
    });

    it("should give NaN for distance b/w two points for different instance", function() {
      const point1 = new Point(2, 3);
      const point2 = { x: 2, y: 3 };
      assert.isNaN(point1.findDistanceTo(point2));
    });
  });

  describe("isOn", function() {
    it("should return true for given point is on the line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
      const point = new Point(2, 2);
      assert.ok(point.isOn(line));
    });

    it("should give false for given point is not on the line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
      const point = new Point(5, 5);
      assert.notOk(point.isOn(line));
    });

    it("should return true for given point is on the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = new Point(0, 3);
      assert.ok(point.isOn(circle));
    });

    it("should give false for given point is inside the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = new Point(0, 2);
      assert.notOk(point.isOn(circle));
    });

    it("should give false for given point is outside the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = new Point(0, 4);
      assert.notOk(point.isOn(circle));
    });
  });
});
