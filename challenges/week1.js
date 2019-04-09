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
  
  const capitaliseFirstInital = firstName[0].toUpperCase();
  const capitaliseLastInital = lastName[0].toUpperCase();
  const generateInitials = capitaliseFirstInital + "." + capitaliseLastInital
  return generateInitials 
 
}
/* function generateInitals from first and last names
if first name is undefined throw error message
if last name is undefined throw error message

get first initals and capitalise them
get second intial and capitalise
separate/get individual initials 
return both initials capitalised
*/

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
 
  const addVAT = originalPrice/100 *vatRate;
  const newPrice = originalPrice + addVAT;
  return Math.round(newPrice*100) /100 
}
/* if no price is entered throw error 
if no Vat is entered throw error
original price equals placeholder
vat equals percentage of original price maths equation
new price equals original price add vat
return new price which is original plus vat rounded to 2 decimal places.
*/

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");

  const getSalePrice = originalPrice/100 *reduction;
  const salePrice = originalPrice - getSalePrice;
  return Math.round(salePrice*100) /100
}
/*
throw error if no price entered
throw error if no reduction entered

reduction rate equals percentage off original price
sale price equals original price less the reduction rate
return sale price to 2 decimal places
*/

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  var isOdd = str.length % 2 === 1
  if (isOdd) {
    var middleIndex = str.length/2
    var roundedMiddleIndex = Math.floor(middleIndex)
    return str[roundedMiddleIndex]
  } else {
  var firstMiddleIndex = (str.length/2)-1
  var secondMiddleIndex = str.length/2
  var bothMiddleIndexes = str [firstMiddleIndex] + str [secondMiddleIndex]
  return bothMiddleIndexes
  }
}
/* no text entered throw error message
if string is odd in length 
find middleindex by dividing length/2
return the single character str[placeinstring]
else
if string is even in length
find first index by /2 -1
find second index by /2
add them together
return the two middle characters
*/
function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  const reversedCharacters = []
  for (let i = 0; i < word.length; i++){
    reversedCharacters.unshift(word[i])
  }
  return reversedCharacters.join("");
}

/*function reverseAllWords(words) {
    if (words === undefined) throw new Error("words is required");
    const reversedWords = []
    for (let i = 0; i < words.length; i++){
      reversedWords.unshift(words[i])
    }
    return reversedWords.join(" ")
  }
    */
function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  const reverseAllWords = []
  var splitWords = words.split();
  var reverseWords = splitWords.reverse();
  return reverseWords.join(" ") }
    
/* error if nothing entered
find words in the array
reverse these words
return the reversed words in an array
*/

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
}
/* Error if nothing entered
Watch the rest of harriets video!

*/

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
}
/* error if nothing entered
calculate mean score add and divide by number of scores
return the mean score
else
get mean score to 2 decimal places
*/
function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
}
/* check code against the one on slack and update it
error if nothing entered

fizz equals numbers dividable by 3 calculate this
return fizz
else if
n is divisiable by 5
return buzz 

else if

n is not divisable by 3 or 5
return the number

FizzBuzz equals numbers divisable by 3 and 5
return FizzBuzz
*/
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
