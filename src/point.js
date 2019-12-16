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
}

module.exports = Point;
