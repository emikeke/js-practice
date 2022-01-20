function stringRotation(str1, str2) {
  if (str1.length === str2.length) {
    if ((str1 + str1).indexOf(str2) > -1) {
      return true;
    }
  } 
  return false;
  
};

//console.log(stringRotation("ABCD", "ACBD"));

module.exports = stringRotation;