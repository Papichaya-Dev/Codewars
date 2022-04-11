//================ Question 1 ================ //
//Complete the solution so that it splits the string into pairs of two characters.
//If the string contains an odd number of characters then it should replace the missing
//second character of the final pair with an underscore ('_').
function splitString(string) {
  if (string.length % 2 === 0) {
    var pair_two_characters = string.split(/(?=(?:..)*$)/);
  } else {
    var pair_two_characters = string.split(/(?=(?:..)*.$)/);
    var last_characters = pair_two_characters.splice(-1);
    var output = pair_two_characters.push(last_characters + "_");
  }

  return pair_two_characters;
}
console.log("[output]", splitString("abc"));
