function findValidParentheses(string) {
  //check string is odd or even to check valid parent
  if (string.length % 2 !== 0) {
    return false;
  }

  const findValidParent = [];
  const charactor = new Map([
    ["(", ")"],
    ["{", "}"],
    ["[", "]"],
  ]);

  for (let i = 0; i < string.length; i += 1) {
    if (charactor.has(string[i])) {
      findValidParent.push(charactor.get(string[i]));
    } else {
      return false;
    }
  }
  return findValidParent;
}

console.log("[output]", findValidParentheses("())"));
