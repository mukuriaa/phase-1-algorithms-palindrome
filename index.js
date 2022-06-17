function reverse(word) {
  // Write your algorithm here
  return word.split("").reverse().join("");
}

/* 
  Add your pseudocode here
*/ function isPalindrome(word){
  const reversedWord = reverse(word)
  return word === reversedWord;
}

/*
  Add written explanation of your solution here
*/
// the reversed word should be same as the word input for it to be true e.g mom===mom

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));
  console.log("");



  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

