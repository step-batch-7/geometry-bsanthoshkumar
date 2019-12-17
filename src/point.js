class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }

  toString() {
    return `[Point @(${this.x},${this.y})]`;
  }

  isEqualTo(other) {
    if (!(other instanceof Point)) return false;
    const areXPointsEqual = this.x == other.x;
    const areYPointsEqual = this.y == other.y;
    return areXPointsEqual && areYPointsEqual;
  }

  clone() {
    return new Point(this.x, this.y);
  }

  visit(action) {
    return action(this.x, this.y);
  }

  findDistanceTo(other) {
    if (!(other instanceof Point)) return NaN;
    const lengthBetweenXPoints = other.x - this.x;
    const lengthBetweenYPoints = other.y - this.y;
    const sumOfLengths =
      Math.pow(lengthBetweenXPoints, 2) + Math.pow(lengthBetweenYPoints, 2);
    return Math.sqrt(sumOfLengths);
  }

  isOn(other) {
    return other.hasPoint(this);
  }
}

module.exports = Point;
