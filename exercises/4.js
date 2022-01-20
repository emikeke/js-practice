function sumOfArrays(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array[i].length; j++){
      sum += array[i][j];
    }
  }
  return sum;
}

//console.log(sumOfArrays([[3, 2], [1], [4, 12]]));

module.exports = sumOfArrays;