function duplicate(array) {
  /* 
  let duplicateArray = [];
  duplicateArray.push(array, array);
  let newArray = [];
  for (let i = 0; i < duplicateArray.length; i++) {
    for (let j = 0; j < duplicateArray[i].length; j++) {
      newArray.push(duplicateArray[i][j]);
    }
  }
  return newArray;

  */
  let newArray = array;
  /* splice refers to (starting index position, count, which element name)
  newArray.forEach(element => newArray.splice(newArray.length, 0, element));
  return newArray;
  */

  // concat is used to merge arrays together, it doesn't change the existing array and returns a new array
  return array.concat(array);
};

//console.log(duplicate([2, 4, 6, 22, 0]));

module.exports = duplicate;