// a callback function is a function that is passed as a parameter to another function
function calculation(arr, callback) {
  // pushes 100 to arr 
  arr.push(100);
  // execute the callback function that was passed
  callback(arr);
};

let arr = [1, 2, 3, 4, 5];

calculation(arr, function() {
  console.log("array has been modified", arr);
})

module.exports = calculation;