class Line {
  constructor(endA, endB) {
    this.endA = endA;
    this.endB = endB;
  }
  isEqualTo(other) {
    return this == other;
  }
  toString() {
    return "";
  }
}

module.exports = Line;
