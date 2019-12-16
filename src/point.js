const arePointsEqual = (point1, point2) => {
  const areXPointsEqual = point1.x == point2.x;
  const areYPointsEqual = point1.y == point2.y;
  return areXPointsEqual && areYPointsEqual;
};

class Point {
  constructor(x, y) {
    [this.x, this.y] = [x, y];
  }

  toString() {
    return `Point @(${this.x},${this.y})`;
  }

  isEqualTo(other) {
    return other instanceof Point && arePointsEqual(this, other);
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

  isOn(line) {
    return line.hasPoint(this);
  }
}

module.exports = Point;
