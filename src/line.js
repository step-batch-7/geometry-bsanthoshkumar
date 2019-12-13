class Line {
  constructor(endA, endB) {
    this.endA = endA;
    this.endB = endB;
  }
  isEqualTo(other) {
    return this == other;
  }
  toString() {
    return `Line from (${this.endA.x},${this.endA.y}) to (${this.endB.x},${this.endB.y})`;
  }
}

module.exports = Line;
