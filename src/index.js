module.exports = function reverse (n) {
  const absN = Math.abs(n);
  const reversed = absN.toString().split('').reverse().join('');
  return reversed;
}
