const arePointsEqual = (point1, point2) => {
  const areXPointsEqual = point1.x == point2.x;
  const areYPointsEqual = point1.y == point2.y;
  return areXPointsEqual && areYPointsEqual;
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
    return `Line from (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})`;
  }
}

module.exports = Line;
