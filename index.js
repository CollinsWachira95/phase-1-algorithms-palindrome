function isPalindrome(word) {
    // Algorithm to check if a word is a palindrome
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  }
  
  /* 
    Pseudocode:
    1. Split the string into an array of characters.
    2. Reverse the array of characters.
    3. Join the reversed array back into a string.
    4. Check if the original string is equal to the reversed string.
    5. Return true if they are equal, otherwise return false.
  */
  
  /*
    Explanation:
    A palindrome is a word that reads the same backward as forward. 
    By reversing the word and comparing it to the original, we can determine 
    if it is a palindrome.
  */
  
  // You can run `node index.js` to view these console logs
  if (require.main === module) {
    // Add your own custom tests here
    console.log("Expecting: true");
    console.log("=>", isPalindrome("racecar"));
  
    console.log("");
  
    console.log("Expecting: false");
    console.log("=>", isPalindrome("robot"));
  }
  
  module.exports = isPalindrome;
  