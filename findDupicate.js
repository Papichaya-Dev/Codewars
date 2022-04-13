function findDupicates(array) {
  //use filter to find dupicate
  const findDuplicatesNumber = array.filter((num, index) => index !== array.indexOf(num));

  return findDuplicatesNumber;
}
console.log("[dupicate number]", findDupicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3]));
