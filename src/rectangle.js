const Line = require("./line");

class Rectangle {
  constructor(endA, endB) {
    this.diagonal = new Line(endA, endB);
  }

  toString() {
    return `[Rectangle (${this.diagonal.endA.x},${this.diagonal.endA.y}) to (${this.diagonal.endB.x},${this.diagonal.endB.y})]`;
  }

  get area() {
    const length = this.diagonal.endB.x - this.diagonal.endA.x;
    const breadth = this.diagonal.endB.y - this.diagonal.endA.y;
    return Math.abs(length * breadth);
  }

  get perimeter() {
    const length = this.diagonal.endB.x - this.diagonal.endA.x;
    const breadth = this.diagonal.endB.y - this.diagonal.endA.y;
    return 2 * (Math.abs(length) + Math.abs(breadth));
  }
}

module.exports = Rectangle;
