const assert = require("chai").assert;
const Rectangle = require("../src/rectangle");

describe("Rectangle", function() {
  describe("toString", function() {
    it("should give string representation of rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 1 }, { x: 5, y: 4 });
      assert.strictEqual(rectangle.toString(), "[Rectangle (1,1) to (5,4)]");
    });
  });

  describe("area", function() {
    it("should give area of given rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 3 }, { x: 4, y: 1 });
      assert.strictEqual(rectangle.area, 6);
    });
  });

  describe("perimeter", function() {
    it("should give perimeter of given rectangle", function() {
      const rectangle = new Rectangle({ x: 1, y: 3 }, { x: 4, y: 1 });
      assert.strictEqual(rectangle.perimeter, 10);
    });
  });

  describe("isEqualTo", function() {
    it("should give true for equal lines of same instance", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 3 }, { x: 4, y: 1 });
      const rectangle2 = new Rectangle({ x: 1, y: 3 }, { x: 4, y: 1 });
      assert.ok(rectangle1.isEqualTo(rectangle2));
    });

    it("should give false for non equal lines of same instance", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 3 }, { x: 4, y: 1 });
      const rectangle2 = new Rectangle({ x: 1, y: 4 }, { x: 3, y: 1 });
      assert.notOk(rectangle1.isEqualTo(rectangle2));
    });

    it("should give false for equal lines of different instance", function() {
      const rectangle1 = new Rectangle({ x: 1, y: 3 }, { x: 4, y: 1 });
      const rectangle2 = {
        diagonal: { endA: { x: 1, y: 3 }, endB: { x: 4, y: 1 } }
      };
      assert.notOk(rectangle1.isEqualTo(rectangle2));
    });
  });
});
