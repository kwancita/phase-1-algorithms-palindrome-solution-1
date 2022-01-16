/*write the function to reverse the word in new string 
if after reverse the word to new string and 
they still read in the same way return ture if not return false*/
function reverse(word){
  // const splitWordArray = word.split("")
  // const reverseWordArray = splitWordArray.reverse()
  // const joinWordArray = reverseWordArray.join("")
  // return joinWordArray
  return word.split("").reverse().join("");
}
function isPalindrome(word){
  const reverseWord = reverse(word)
  return reverseWord === word
  // if(reverseWord === word){
  //   return true
  // }else{
  //   return false
  // }
}


//kwan's solution
// function isPalindrome(word) {
//   // Write your algorithm here
//   // set newStr to empty
//   var newStr = ""
//   // iterate over the word
//   for (var i = word.length-1; i>=0; i--){
//   //   store index of word in newStr
//     newStr += word[i]
//   }
//   // if newStr === word
//   if (newStr === word){
//   //   return true
//     return true
//     // else
//   }else{
//   //   return false
//     return false
//   }
// }

/* 
  Add your pseudocode here

  set newStr to empty
  iterate over the word
    store index of word in newStr
  if newStr === word
    return true
  else
    return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));
}

module.exports = isPalindrome;
