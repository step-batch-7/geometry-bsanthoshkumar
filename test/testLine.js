const assert = require("chai").assert;
const Line = require("../src/line");
const Point = require("../src/point");

describe("Line", function() {
  describe("toString", function() {
    it("should give the string representation of object", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const expected = `[Line (1,2) to (3,4)]`;
      assert.strictEqual(line1.toString(), expected);
    });
  });

  describe("isEqualTo", function() {
    it("should give true for two same lines", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.ok(line1.isEqualTo(line2));
    });

    it("should give false for two different lines", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 4, y: 3 }, { x: 2, y: 1 });
      assert.notOk(line1.isEqualTo(line2));
    });

    it("should give false for two lines of different instances", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = { endA: { x: 1, y: 2 }, endB: { x: 3, y: 4 } };
      assert.notOk(line1.isEqualTo(line2));
    });
  });

  describe("length", function() {
    it("should give length of a line for positive values", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.approximately(line.length, 3, 0.5);
    });

    it("should give length of a line for negative values", function() {
      const line = new Line({ x: -2, y: 1 }, { x: 6, y: -4 });
      assert.approximately(line.length, 9, 0.5);
    });
  });

  describe("slope", function() {
    it("should give slope of a line", function() {
      const line = new Line({ x: 8, y: 13 }, { x: 2, y: 3 });
      assert.approximately(line.slope, 2, 0.5);
    });

    it("should give slope 0 for line of same y-values", function() {
      const line = new Line({ x: 1, y: 3 }, { x: 2, y: 3 });
      assert.strictEqual(line.slope, 0);
    });

    it("should give slope Infinity for line of same x-values", function() {
      const line = new Line({ x: 1, y: 3 }, { x: 1, y: 5 });
      assert.strictEqual(line.slope, Infinity);
    });
  });

  describe("isParallelTo", function() {
    it("should give true for parallel lines of same instance", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 2, y: 4 }, { x: 6, y: 8 });
      assert.ok(line1.isParallelTo(line2));
    });

    it("should give false for non-parallel lines of same instance", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 7, y: 10 }, { x: 8, y: 9 });
      assert.notOk(line1.isParallelTo(line2));
    });

    it("should give false for parallel lines of different instance", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = { endA: { x: 4, y: 3 }, endB: { x: 2, y: 1 } };
      assert.notOk(line1.isParallelTo(line2));
    });

    it("should give false for non-parallel lines of different instance", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = { endA: { x: 4, y: 8 }, endB: { x: 2, y: 15 } };
      assert.notOk(line1.isParallelTo(line2));
    });

    it("should give false for overlapping lines of same instance", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.notOk(line1.isParallelTo(line2));
    });

    it("should give false for collinear lines", function() {
      const line1 = new Line({ x: 0, y: 0 }, { x: 3, y: 3 });
      const line2 = new Line({ x: 2, y: 2 }, { x: 4, y: 4 });
      assert.strictEqual(line1.isParallelTo(line2), false);
    });
  });

  describe("findX", function() {
    it("should give NaN for given y value outside of the line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 2 });
      assert.isNaN(line.findX(8));
    });

    it("should give x value of endPoint for given y value of endPoint", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 2 });
      assert.strictEqual(line.findX(1), 1);
    });

    it("should give x value of 1st endPoint for given both y values are same", function() {
      const line = new Line({ x: 4, y: 2 }, { x: 6, y: 2 });
      assert.strictEqual(line.findX(2), 4);
    });

    it("should give x value of 1st endPoint for given both x values are same", function() {
      const line = new Line({ x: 2, y: 4 }, { x: 2, y: 6 });
      assert.strictEqual(line.findX(5), 2);
    });
  });

  describe("findY", function() {
    it("should give NaN for given x value outside of the line", function() {
      const line = new Line({ x: 1, y: 2 }, { x: 2, y: 2 });
      assert.isNaN(line.findY(4));
    });

    it("should give y value of endPoint for given x value of endPoint", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 2 });
      assert.strictEqual(line.findY(3), 2);
    });

    it("should give y value of 1st endPoint for given both y values are same", function() {
      const line = new Line({ x: 4, y: 2 }, { x: 6, y: 2 });
      assert.strictEqual(line.findY(5), 2);
    });

    it("should give x value for given both x values are same", function() {
      const line = new Line({ x: 2, y: 4 }, { x: 2, y: 6 });
      assert.strictEqual(line.findY(2), 4);
    });
  });

  describe("hasPoint", function() {
    it("should return true for given point is on the line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
      const point = new Point(2, 2);
      assert.ok(line.hasPoint(point));
    });

    it("should give false for given point not on the line", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
      const point = new Point(5, 5);
      assert.notOk(line.hasPoint(point));
    });

    it("should give false for point of different instance", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 4, y: 4 });
      const point = { x: 2, y: 2 };
      assert.notOk(line.hasPoint(point));
    });
  });

  describe("split", function() {
    it("should give two lines splitted in center", function() {
      const line = new Line({ x: 1, y: 1 }, { x: 3, y: 3 });
      const firstLine = new Line({ x: 1, y: 1 }, { x: 2, y: 2 });
      const secondLine = new Line({ x: 2, y: 2 }, { x: 3, y: 3 });
      assert.deepStrictEqual(line.split(), [firstLine, secondLine]);
    });
  });

  describe("findPointFromStart", function() {
    it("should give point from start point of line at given distance", function() {
      const line = new Line({ x: 0, y: 1 }, { x: 0, y: 11 });
      const point = new Point(0, 6);
      assert.deepStrictEqual(line.findPointFromStart(5), point);
    });

    it("should give start point of line for distance 0", function() {
      const line = new Line({ x: 0, y: 1 }, { x: 0, y: 11 });
      const point = new Point(0, 1);
      assert.deepStrictEqual(line.findPointFromStart(0), point);
    });

    it("should give end Point of line for distance is given as length of line segment", function() {
      const line = new Line({ x: 0, y: 1 }, { x: 0, y: 11 });
      const point = new Point(0, 11);
      assert.deepStrictEqual(line.findPointFromStart(10), point);
    });

    it("should return null for if distance is greater than length of line", function() {
      const line = new Line({ x: 0, y: 1 }, { x: 0, y: 5 });
      assert.isNull(line.findPointFromStart(5));
    });

    it("should return null for if distance is less than length of line", function() {
      const line = new Line({ x: 0, y: 1 }, { x: 0, y: 5 });
      assert.isNull(line.findPointFromStart(-5));
    });
  });

  describe("findPointFromEnd", function() {
    it("should give point from end point of line at given distance", function() {
      const line = new Line({ x: 0, y: 1 }, { x: 0, y: 11 });
      const point = new Point(0, 6);
      assert.deepStrictEqual(line.findPointFromEnd(5), point);
    });

    it("should give end point of line for distance 0", function() {
      const line = new Line({ x: 0, y: 1 }, { x: 0, y: 11 });
      const point = new Point(0, 11);
      assert.deepStrictEqual(line.findPointFromEnd(0), point);
    });

    it("should give start Point of line for distance is given as length of line segment", function() {
      const line = new Line({ x: 0, y: 1 }, { x: 0, y: 11 });
      const point = new Point(0, 1);
      assert.deepStrictEqual(line.findPointFromEnd(10), point);
    });

    it("should return null for if distance is greater than length of line", function() {
      const line = new Line({ x: 0, y: 1 }, { x: 0, y: 5 });
      assert.isNull(line.findPointFromEnd(6));
    });

    it("should return null for if distance is less than length of line", function() {
      const line = new Line({ x: 0, y: 1 }, { x: 0, y: 5 });
      assert.isNull(line.findPointFromEnd(-5));
    });
  });
});
