function luckySevens(array) {
  if (array.length < 3){
    return false;
  } 
  for (let i = 2; i < array.length; i++){
    if ((array[i] + array[i-1] + array[i-2]) === 7){
      return true;
    }
  }
  return false;
};

//console.log(luckySevens([0, 1, 2, 4, 5]));

module.exports = luckySevens;