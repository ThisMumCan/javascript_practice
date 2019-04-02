function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  const firstChar = word[0].toUpperCase();
  const restOfWord = word.slice(1);
  const fullWord = firstChar + restOfWord;
  return fullWord
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");  
  
  const names = ['firstName', 'lastName'];
  const capitaliseFirstInital = firstName[0].toUpperCase();
  const capitaliseLastInital = lastName[0].toUpperCase();
  const generateInitials = capitaliseFirstInital + capitaliseLastInital
  //const generateInitials = names.spilt(text.CharAt0,charAt.text.length-1);
  //let split = (intials)
  return generateInitials 
 
}
/* function generateInitals from first and last names
if first name is undefined throw error message
if last name is undefined throw error message

get first initals and capitalise them
add first initals together
return both initials

// psudeocoding example from the 10 steps to problem solve blog article
//function selectEvenNumbers
//create an array evenNumbers and set that equal to an empty array
//for each element in that array
//see if that element is even
//if element is even (if there is a remainder when divided by 2)
//add to that to the array evenNumbers
//return evenNumbers
*/

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
