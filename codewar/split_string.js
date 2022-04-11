//================ Question 1 ================ //
//Complete the solution so that it splits the string into pairs of two characters.
//If the string contains an odd number of characters then it should replace the missing
//second character of the final pair with an underscore ('_').
function splitString(string) {
  if (string.length % 2 === 0) {
    console.log(string.length % 6);
    var pair_two_characters_even = string.split(/(?=(?:..)*$)/);
  } else {
    var pair_two_characters_odd = string.split(/(?=(?:..)*.$)/);
    var last_characters = pair_two_characters_odd.splice(-1);
    var output = pair_two_characters_odd.push(last_characters + "_");
  }

  return { pair_two_characters_even, pair_two_characters_odd };
}
console.log("[output]", splitString("abc"));
