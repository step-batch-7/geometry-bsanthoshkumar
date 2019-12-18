const Point = require("./point");

const isNumberInRange = function(range, number) {
  const lowerLimit = Math.min(...range);
  const upperLimit = Math.max(...range);
  return lowerLimit <= number && upperLimit >= number;
};

const areCollinearPoints = function(point1, point2, point3) {
  const [x1, y1] = [point1.x, point1.y];
  const [x2, y2] = [point2.x, point2.y];
  const [x3, y3] = [point3.x, point3.y];
  return x1 * (y2 - y3) + x2 * (y3 - y1) + x3 * (y1 - y2) == 0;
};
class Line {
  constructor(endA, endB) {
    this.endA = new Point(endA.x, endA.y);
    this.endB = new Point(endB.x, endB.y);
  }

  isEqualTo(other) {
    if (!(other instanceof Line)) return false;
    return (
      (this.endA.isEqualTo(other.endA) && this.endB.isEqualTo(other.endB)) ||
      (this.endA.isEqualTo(other.endB) && this.endB.isEqualTo(other.endA))
    );
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
    if (
      areCollinearPoints(this.endA, this.endB, other.endA) ||
      !(other instanceof Line)
    )
      return false;
    if (Math.abs(this.slope) == Infinity && Math.abs(other.slope) == Infinity)
      return true;
    return this.slope === other.slope;
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

  split() {
    const midPoint = {
      x: (this.endA.x + this.endB.x) / 2,
      y: (this.endA.y + this.endB.y) / 2
    };
    return [new Line(this.endA, midPoint), new Line(midPoint, this.endB)];
  }

  findPointFromStart(distance) {
    const distanceRatio = distance / this.length;
    if (distanceRatio < 0 || distanceRatio > 1) return null;
    const x = (1 - distanceRatio) * this.endA.x + distanceRatio * this.endB.x;
    const y = (1 - distanceRatio) * this.endA.y + distanceRatio * this.endB.y;
    if (isNaN(x) || isNaN(y)) return null;
    return new Point(x, y);
  }

  findPointFromEnd(distance) {
    const distanceRatio = distance / this.length;
    if (distanceRatio < 0 || distanceRatio > 1) return null;
    const x = (1 - distanceRatio) * this.endB.x + distanceRatio * this.endA.x;
    const y = (1 - distanceRatio) * this.endB.y + distanceRatio * this.endA.y;
    if (isNaN(x) || isNaN(y)) return null;
    return new Point(x, y);
  }
}

module.exports = Line;
