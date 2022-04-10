if (!process.argv[2]) {
  console.error("[USAGE] node longest_palindrome.js <target string>");
  process.exit(1);
}
//function แปลง string ให้เป็นย้อนกลับ
function reverseText(targetString) {
  return targetString.split("").reverse().join("");
}
const MAXIMUM_LENGTH = 1000;
function longestPalindrome(s) {
  if (s.length >= MAXIMUM_LENGTH) {
    console.error("[ERROR] string exceed maximum length");
    process.exit(1);
  }
  let palindrome = [];
  let reverseString = reverseText(s);
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < reverseString.length; j++) {
      //กรณีที่เป็น palindrome และเท่ากันทั้ง string และ reverse string
      if (s === reverseString) {
        palindrome.push(s);
      }
      //ไล่ดูใน loop เเต่ละตัวว่ามีตัวไหนทีเท่ากัน
      if (s.substring([i], [j] - 1) === reverseString.substring([i], [j] - 1)) {
        palindrome.push(s.substring([i], [j] - 1));
      }
    }
  }
  //========= หา palindrome ตัวที่ยาวที่สุด =================//
  var lenght = 0;
  var longestPalindrome;

  for (var i = 0; i < palindrome.length; i++) {
    if (palindrome[i].length > lenght) {
      var lenght = palindrome[i].length;
      longestPalindrome = palindrome[i];
    }
  }
  return longestPalindrome;
}
console.log("[longest palindrome]:", longestPalindrome(process.argv[2]));
