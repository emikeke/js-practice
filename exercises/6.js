function oddballSum(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 1) {
      sum += array[i];
    }
    
  }
  return sum;
};

//console.log(oddballSum([3, 5, 7, 2, 1]));

module.exports = oddballSum;