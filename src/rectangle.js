const Point = require("./point");
const Line = require("./line");

class Rectangle {
  constructor(vertexA, vertexC) {
    this.vertexA = new Point(vertexA.x, vertexA.y);
    this.vertexC = new Point(vertexC.x, vertexC.y);
    this.vertexB = new Point(vertexC.x, vertexA.y);
    this.vertexD = new Point(vertexA.x, vertexC.y);
  }

  toString() {
    return `[Rectangle (${this.vertexA.x},${this.vertexA.y}) to (${this.vertexC.x},${this.vertexC.y})]`;
  }

  get area() {
    const length = this.vertexA.findDistanceTo(this.vertexB);
    const breadth = this.vertexB.findDistanceTo(this.vertexC);
    return length * breadth;
  }

  get perimeter() {
    const length = this.vertexA.findDistanceTo(this.vertexB);
    const breadth = this.vertexB.findDistanceTo(this.vertexC);
    return 2 * (length + breadth);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    const diagonal1 = new Line(this.vertexA, this.vertexC);
    const diagonal2 = new Line(this.vertexB, this.vertexD);
    const otherDiagonal = new Line(other.vertexA, other.vertexC);
    return (
      diagonal1.isEqualTo(otherDiagonal) || diagonal2.isEqualTo(otherDiagonal)
    );
  }
}

module.exports = Rectangle;
