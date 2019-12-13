class Line {
  constructor(endA, endB) {
    this.endA = { ...endA };
    this.endB = { ...endB };
  }
  arePointsEqual(point1, point2) {
    const areXPointsEqual = point1.x == point2.x;
    const areYPointsEqual = point1.y == point2.y;
    return areXPointsEqual && areYPointsEqual;
  }
  isEqualTo(other) {
    const isSameInstance = other instanceof Line;
    const areLinesSame =
      this.arePointsEqual(this.endA, other.endA) &&
      this.arePointsEqual(this.endB, other.endB);
    return isSameInstance && areLinesSame;
  }
  toString() {
    return `Line from (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})`;
  }
}

module.exports = Line;
