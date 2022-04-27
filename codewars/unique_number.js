//================ Question: Find the unique number ================ //
//There is an array with some numbers. All numbers are equal except for one. Try to find it!
function findUniq(arr) {
  const uniqueNumber = arr.find((item) => arr.indexOf(item) === arr.lastIndexOf(item));

  return uniqueNumber;
}

console.log(findUniq([0, 1, 0]));
