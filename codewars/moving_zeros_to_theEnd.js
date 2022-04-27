//================ Question: Moving Zeros To The End ================ //
//Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.
function moveZeros(arr) {
  let result = [];
  let count_zero = arr.filter((value) => value === 0).length;
  console.log("length of zero:", count_zero);
  arr.map((item, index) => {
    if (item !== 0) {
      return result.push(arr[index]);
    }
  });
  for (var i = 0; i < count_zero; i++) {
    result.push(0);
  }
  return result;
}

console.log("result", moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
