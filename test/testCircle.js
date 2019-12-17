const assert = require("chai").assert;
const Circle = require("../src/circle");
const Point = require("../src/point");

describe("Circle", function() {
  describe("toString", function() {
    it("should give string representation of circle", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      assert.strictEqual(circle.toString(), `[Circle @(1,2) radius 5]`);
    });
  });

  describe("area", function() {
    it("should give area of given circle", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      assert.approximately(circle.area, 79, 0.5);
    });

    it("should give area of given circle for radius 0", function() {
      const circle = new Circle({ x: 1, y: 2 }, 0);
      assert.strictEqual(circle.area, 0);
    });
  });

  describe("area", function() {
    it("should give perimeter of given circle", function() {
      const circle = new Circle({ x: 1, y: 2 }, 5);
      assert.approximately(circle.perimeter, 31, 0.5);
    });

    it("should give perimeter of given circle for radius 0", function() {
      const circle = new Circle({ x: 1, y: 2 }, 0);
      assert.strictEqual(circle.perimeter, 0);
    });
  });

  describe("isEqualTo", function() {
    it("should give true for equal circles of same instance", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 3);
      const circle2 = new Circle({ x: 1, y: 2 }, 3);
      assert.ok(circle1.isEqualTo(circle2));
    });

    it("should give false for circles of same instance and different radius", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 3);
      const circle2 = new Circle({ x: 1, y: 2 }, 5);
      assert.notOk(circle1.isEqualTo(circle2));
    });

    it("should give false for circles of same instance and different center", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 3);
      const circle2 = new Circle({ x: 2, y: 1 }, 3);
      assert.notOk(circle1.isEqualTo(circle2));
    });

    it("should give false for equal circles of different instance", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 3);
      const circle2 = { center: { x: 1, y: 2 }, radius: 3 };
      assert.notOk(circle1.isEqualTo(circle2));
    });
  });

  describe("hasPoint", function() {
    it("should give true for point is on the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = new Point(0, 3);
      assert.ok(circle.hasPoint(point));
    });

    it("should give false for point is inside the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = new Point(0, 2);
      assert.notOk(circle.hasPoint(point));
    });
    it("should give false for point is outside the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = new Point(0, 4);
      assert.notOk(circle.hasPoint(point));
    });
    it("should give false for point of different instance is on the circle", function() {
      const circle = new Circle({ x: 0, y: 0 }, 3);
      const point = { x: 0, y: 3 };
      assert.notOk(circle.hasPoint(point));
    });
  });

  describe("moveTo", function() {
    it("should give new circle for given circle and point", function() {
      const circle1 = new Circle({ x: 1, y: 2 }, 3);
      const circle2 = new Circle({ x: 5, y: 6 }, 3);
      assert.ok(circle1.moveTo({ x: 5, y: 6 }).isEqualTo(circle2));
    });
  });
});
