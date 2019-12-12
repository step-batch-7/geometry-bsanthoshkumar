const assert = require("assert");
const Line = require("../src/line");

describe("Line", function() {
  describe("toString", function() {
    it("should return empty string", function() {
      line1 = new Line();
      const expected = "";
      assert.strictEqual(line1.toString(), expected);
    });
  });

  describe("isEqualTo", function() {
    it("should return false for two different objects", function() {
      line1 = new Line();
      line2 = new Line();
      assert.strictEqual(line1.isEqualTo(line2), false);
    });

    it("should return true for two different objects", function() {
      line1 = new Line();
      assert.strictEqual(line1.isEqualTo(line1), true);
    });
  });
});
