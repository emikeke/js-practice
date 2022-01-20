function addOneToEach(array) {
  let arrayAfterPlusOne = [];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    arrayAfterPlusOne.push(array[i] + 1);
  }
  for (let i = 0; i < array.length; i++) {
    sum += arrayAfterPlusOne[i];
  }
  return sum;
};

console.log(addOneToEach([3, 0, 3, 10]));

module.exports = addOneToEach;