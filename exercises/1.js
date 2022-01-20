function printingNumbers(num) {
  let arr = [];
  for (let i = 1; i <= num; i++){
    arr.push(i);
  }
  return arr;
}

//printingNumbers(10);

module.exports = printingNumbers;