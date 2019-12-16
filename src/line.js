const arePointsEqual = (point1, point2) => {
  const areXPointsEqual = point1.x == point2.x;
  const areYPointsEqual = point1.y == point2.y;
  return areXPointsEqual && areYPointsEqual;
};

const isNumberInRange = function(range, number) {
  const lowerLimit = Math.min(...range);
  const upperLimit = Math.max(...range);
  return lowerLimit <= number && upperLimit >= number;
};
class Line {
  constructor(endA, endB) {
    this.endA = { x: endA.x, y: endA.y };
    this.endB = { x: endB.x, y: endB.y };
  }

  isEqualTo(other) {
    if (other instanceof Line) {
      return (
        arePointsEqual(this.endA, other.endA) &&
        arePointsEqual(this.endB, other.endB)
      );
    }
    return false;
  }

  toString() {
    return `[Line (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})]`;
  }

  get length() {
    const lengthBetweenXPoints = this.endB.x - this.endA.x;
    const lengthBetweenYPoints = this.endB.y - this.endA.y;
    const sumOfLengths =
      Math.pow(lengthBetweenXPoints, 2) + Math.pow(lengthBetweenYPoints, 2);
    return Math.sqrt(sumOfLengths);
  }

  get slope() {
    const lengthBetweenYPoints = this.endB.y - this.endA.y;
    const lengthBetweenXPoints = this.endB.x - this.endA.x;
    return lengthBetweenYPoints / lengthBetweenXPoints;
  }

  isParallelTo(other) {
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
    return point.y == this.findY(point.x) || point.x == this.findX(point.y);
  }
}

module.exports = Line;
