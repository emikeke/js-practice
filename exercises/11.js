// initializing 2 stacks
  let stack1 = [];
  let stack2 = [];
  
// in enqueue we are populating stack1. a stack is a linear data structure that works on the concept of LIFO
function enqueue(input) {
  stack1.push(input);
  return stack1;
};

// in dequeue we are removing elements one by one from stack1 and putting it into stack2. because we want the first element, to get to it in a "stack" structure (FILO) where we have remove the last element first, then second last, etc. until we get to the first element. we do not take out the first element. the first element is the result of the first element of dequeuing
function dequeue(stack1) {
  // stack2 array cannot be empty
  if (stack2.length === 0) {
    // stack1 array cannot be empty
    if (stack1.length === 0) {
      return "dequeue not possible"
    }
  }
  // add last element from stack1 to stack 2
  for (let i = stack1.length; i >= 0; i--) {
    stack2.push(stack1[i]);
    //console.log("dequeue stack: " + stack2);
  }
  return stack2.pop();
};

//console.log(enqueue([1, 2, 3, 4]));
//console.log(dequeue([1, 2, 3, 4]));


module.exports = enqueue;
module.exports = dequeue;