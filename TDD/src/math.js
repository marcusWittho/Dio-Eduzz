class Math {
  sum(a, b) {
    return a + b;
  }

  multiply(a, b, callback) {
    setTimeout(() => {
      callback(a * b)
    }, 2500);
  }
}

module.exports = Math;
