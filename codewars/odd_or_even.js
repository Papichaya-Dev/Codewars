//================ Question 2 ================ //
//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
  // sum value of array
  const reducer = (acculator, current) => acculator + current;
  const getSum = array.reduce(reducer, 0);
  if (getSum % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
  return getSum;
}

console.log(oddOrEven([0, 1, 4]));
