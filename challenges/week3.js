function getSquares(nums) {
  if (!nums) throw new Error("nums is required");
  var nums = [];
  function Squares {
    Math.pow(nums, 2);
    return getSquares.map(Squares(x)
  };
}
/*
get array of numbers
square the numbers math pow
return squared numbers in new array with map
*/ 
function camelCaseWords(words) {
  if (!words) throw new Error("words is required");
  // Your code here!
}
/*
single words
get first character of first word remove capital
returns uncapitalised
more than one word
get array of words.join()?
remove capitals
adds capitals to all words after
returns as a string without spacestrim()?

*/ 
function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  // Your code here!
}
/*
search array for subjects
count the results and add together
return the sum of subjects studied
*/ 

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
}
/*
searches array for named ingredient returns true if found else returns false
boolean
indexOf()
*/ 

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
  // Your code here!
}
/*
concat() returns a copy of both arrays
search for duplicates
.push adds elements to new array
return single array in ascending order with no repeated duplicated number

*/
module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
