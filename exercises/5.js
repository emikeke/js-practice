function divisorsOfThree(low, high) {
  let array = [];
  for (let i = low; i <= high; i++) {
    if (i % 3 === 0) {
      array.push(i + ": div3");
    } else if (i % 3 !== 0) {
      array.push(i);
    }
  }
  return array;
};

//console.log(divisorsOfThree(2,10));

module.exports = divisorsOfThree;