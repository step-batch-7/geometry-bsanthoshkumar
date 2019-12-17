const Line = require("./line");

class Rectangle {
  constructor(endA, endB) {
    this.diagonal = new Line(endA, endB);
  }

  toString() {
    return `[Rectangle (${this.diagonal.endA.x},${this.diagonal.endA.y}) to (${this.diagonal.endB.x},${this.diagonal.endB.y})]`;
  }
}

module.exports = Rectangle;
