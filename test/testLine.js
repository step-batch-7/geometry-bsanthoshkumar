const assert = require("assert");
const Line = require("../src/line");

describe("Line", function() {
  describe("toString", function() {
    it("should give the string representation of object", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const expected = `Line from (1,2) to (3,4)`;
      assert.strictEqual(line1.toString(), expected);
    });
  });

  describe("isEqualTo", function() {
    it("should give true for two same lines", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      assert.strictEqual(line1.isEqualTo(line2), true);
    });

    it("should give false for two different lines", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = new Line({ x: 4, y: 3 }, { x: 2, y: 1 });
      assert.strictEqual(line1.isEqualTo(line2), false);
    });

    it("should give false for two lines of different instances", function() {
      const line1 = new Line({ x: 1, y: 2 }, { x: 3, y: 4 });
      const line2 = { endA: { x: 1, y: 2 }, endB: { x: 3, y: 4 } };
      assert.strictEqual(line1.isEqualTo(line2), false);
    });
  });

  describe("length", function() {
    it("should give length of a line", function() {
      const line = new Line({ x: 2, y: 1 }, { x: 6, y: 4 });
      assert.strictEqual(line.length, 5);
    });
  });
});
