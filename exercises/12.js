function mul(num1) {
  //console.log(num1);
  return function (num2) {
    //console.log(num2);
    return function (num3) {
      //console.log(num3);
      return num1 * num2 * num3;
    }
  }
};

//console.log(mul(2)(3)(4)); // output : 24
//console.log(mul(4)(3)(4)); // output : 48

module.exports = mul;