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

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    const diagonal2 = new Line(
      { x: this.diagonal.endB.x, y: this.diagonal.endA.y },
      { x: this.diagonal.endA.x, y: this.diagonal.endB.y }
    );
    return (
      this.diagonal.isEqualTo(other.diagonal) ||
      diagonal2.isEqualTo(other.diagonal)
    );
  }
}

module.exports = Rectangle;
