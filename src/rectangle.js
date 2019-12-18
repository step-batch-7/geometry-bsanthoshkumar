const Line = require("./line");
const Point = require("./point");

const getLengthAndWidth = diagonal => {
  const [endA, endB] = [diagonal.endA, diagonal.endB];
  const length = Math.abs(endB.x - endA.x);
  const breadth = Math.abs(endB.y - endA.y);
  return { length, breadth };
};

const isNumberInRange = function(range, number) {
  const lowerLimit = Math.min(...range);
  const upperLimit = Math.max(...range);
  return lowerLimit <= number && upperLimit >= number;
};
class Rectangle {
  constructor(endA, endB) {
    this.diagonal = new Line(endA, endB);
  }

  toString() {
    return `[Rectangle (${this.diagonal.endA.x},${this.diagonal.endA.y}) to (${this.diagonal.endB.x},${this.diagonal.endB.y})]`;
  }

  get area() {
    const { length, breadth } = getLengthAndWidth(this.diagonal);
    return length * breadth;
  }

  get perimeter() {
    const { length, breadth } = getLengthAndWidth(this.diagonal);
    return 2 * (length + breadth);
  }

  isEqualTo(other) {
    if (!(other instanceof Rectangle)) return false;
    const [endA, endB] = [this.diagonal.endA, this.diagonal.endB];
    const diagonal2 = new Line(
      { x: endB.x, y: endA.y },
      { x: endA.x, y: endB.y }
    );
    return (
      this.diagonal.isEqualTo(other.diagonal) ||
      diagonal2.isEqualTo(other.diagonal)
    );
  }

  hasPoint(other) {
    if (!(other instanceof Point)) return false;
    const [endA, endB] = [this.diagonal.endA, this.diagonal.endB];
    const isXEqual = endA.x == other.x || endB.x == other.x;
    const isYEqual = endA.y == other.y || endB.y == other.y;
    const isXInRange = isNumberInRange([endA.x, endB.x], other.x);
    const isYInRange = isNumberInRange([endA.y, endB.y], other.y);
    return (isXEqual && isYInRange) || (isYEqual && isXInRange);
  }

  covers(other) {
    if (!(other instanceof Point)) return false;
    const [endA, endB] = [this.diagonal.endA, this.diagonal.endB];
    const isXInRange = isNumberInRange([endA.x, endB.x], other.x);
    const isYInRange = isNumberInRange([endA.y, endB.y], other.y);
    return isXInRange && isYInRange && !this.hasPoint(other);
  }
}

module.exports = Rectangle;
