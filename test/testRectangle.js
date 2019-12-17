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
});
