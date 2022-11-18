
function sum(fromN, toN) {
  // Sum all the values from fromN up to toN
  // 3 4 5 6 7
  // 3 + sum(4,7)
  // 3 + 4 + sum(5,7)
  if (fromN === toN) { //base case
    return fromN;
  }
  return fromN + sum(fromN + 1,toN);
}

module.exports = sum;
