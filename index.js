function isPalindrome(word) {
  // Write your algorithm here
  if(word===word.split("").reverse().join('')){
    return true
  }else{return false}
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  -We first convert the string into an array using the split("") method
   to separate the letters.
  -Use the reverse() method to reverse the order of elements in array.
  -Use the join('') method to convert the array into a sting and join 
   the separated letters. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
