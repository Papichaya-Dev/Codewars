//================ Question: Simple pig Latin ================ //
//Move the first letter of each word to the end of it,
//then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  var regExp = /[a-zA-Z]+/;
  var addCharactor = "ay";

  return str
    .split(" ")
    .map((word) => (regExp.test(word) ? word.slice(1) + word[0] + addCharactor : word))
    .join(" ");
}

console.log(pigIt("This is my string"));
