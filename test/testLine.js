const assert = require("assert");
const Line = require("../src/line");

describe("Line", function() {
  describe("toString", function() {
    it("should return empty string", function() {
      line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const expected = `Line from (1,2) to (3,4)`;
      assert.strictEqual(line1.toString(), expected);
    });
  });

  describe("isEqualTo", function() {
    it("should return false for two different objects", function() {
      line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.strictEqual(line1.isEqualTo(line2), false);
    });

    it("should return true for two different objects", function() {
      line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.strictEqual(line1.isEqualTo(line1), true);
    });
  });
});
