const Point = require("../src/point");

const isNumberInRange = function(range, number) {
  const lowerLimit = Math.min(...range);
  const upperLimit = Math.max(...range);
  return lowerLimit <= number && upperLimit >= number;
};

const areCollinearPoints = function(point1, point2, point3) {
  const line1 = new Line(point1, point2);
  const line2 = new Line(point2, point3);
  return (line1.slope = line2.slope);
};
class Line {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    return this.endA.isEqualTo(other.endA) && this.endB.isEqualTo(other.endB);
  }

  toString() {
    return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }

  get length() {
    return this.endA.findDistanceTo(this.endB);
  }

  get slope() {
    const lengthBetweenYPoints = this.endB.y - this.endA.y;
    const lengthBetweenXPoints = this.endB.x - this.endA.x;
    return lengthBetweenYPoints / lengthBetweenXPoints;
  }

  isParallelTo(other) {
    if (areCollinearPoints(this.endA, this.endB, other.endA)) return false;
    if (this.isEqualTo(other)) return false;
    return this.slope == other.slope;
  }

  findX(y) {
    if (!isNumberInRange([this.endA.y, this.endB.y], y)) return NaN;
    if (this.slope == +-0) return this.endA.x;
    const yIntercept = y - this.endA.y;
    return yIntercept / this.slope + this.endA.x;
  }
  findY(x) {
    if (!isNumberInRange([this.endA.x, this.endB.x], x)) return NaN;
    if (this.slope == Infinity || this.slope == -Infinity) return this.endA.y;
    const xIntercept = x - this.endA.x;
    return xIntercept * this.slope + this.endA.y;
  }

  hasPoint(point) {
    return (
      point instanceof Point &&
      (point.y == this.findY(point.x) || point.x == this.findX(point.y))
    );
  }

  get split() {
    const midPoint = {};
    midPoint.x = (this.endA.x + this.endB.x) / 2;
    midPoint.y = (this.endA.y + this.endB.y) / 2;
    return [new Line(this.endA, midPoint), new Line(midPoint, this.endB)];
  }
}

module.exports = Line;
