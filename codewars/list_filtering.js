//================ Question 4 ================ //
//In this kata you will create a function that takes a list of non-negative integers and strings
//and returns a new list with the strings filtered out.
function filter_list(l) {
  const result = l.filter(Number.isFinite);
  return result;
}
console.log(filter_list([1, "a", "b", 0, 15]));
