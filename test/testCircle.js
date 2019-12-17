const assert = require("chai").assert;
const Circle = require("../src/circle");
const Point = require("../src/point");

describe("Circle", function() {
  describe("toString", function() {
    it.only("should give string representation of circle", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      assert.strictEqual(circle.toString(), `[Circle @(1,2) radius 5]`);
    });
  });

  describe("area", function() {
    it.only("should give area of given circle", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      assert.approximately(circle.area, 79, 0.5);
    });

    it.only("should give area of given circle for radius 0", function() {
      const circle = new Circle({ x: 1, y: 2 }, 0);
      assert.strictEqual(circle.area, 0);
    });
  });

  describe("area", function() {
    it.only("should give perimeter of given circle", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      assert.approximately(circle.perimeter, 31, 0.5);
    });

    it.only("should give perimeter of given circle for radius 0", function() {
      const circle = new Circle({ x: 1, y: 2 }, 0);
      assert.strictEqual(circle.perimeter, 0);
    });
  });

  describe("isEqualTo", function() {
    it.only("should give true for equal circles of same instance", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 3);
      const circle2 = new Circle({ x: 1, y: 2 }, 3);
      assert.ok(circle1.isEqualTo(circle2));
    });

    it.only("should give false for 2 circles of same instance and different radius", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 3);
      const circle2 = new Circle({ x: 1, y: 2 }, 5);
      assert.notOk(circle1.isEqualTo(circle2));
    });

    it.only("should give false for 2 circles of same instance and different center", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 3);
      const circle2 = new Circle({ x: 2, y: 1 }, 3);
      assert.notOk(circle1.isEqualTo(circle2));
    });
  });
});
