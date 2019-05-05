function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  let filtered = nums.filter(findSmallNums);
  return filtered >= 1;
}



/*
filter numbers less than 1*/

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  const found = [];
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const findFirstChar = name.slice(0, 1)
    if (findFirstChar === char) {
      found.push(name);
    }
  }
  return found;

}


function findVerbs(words) {
  if (!words) throw new Error("words is required");
  const verbs = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const find3Char = word.slice(0, 3)
    if (find3Char === "to ") {
      verbs.push(word);
    }
  }
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // search array
const integers = []
for (let i = 0; i<nums.length; i++){
const num = nums [i];
const findIntegers = num.slice(0,2)
if (findIntegers === "1"){
  integers.push(num);
}
}
  // return array of whole numbers
}
/**/
function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
}
/**/
function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
}
/**/
function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
}
/**/
function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
}
/**/
module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
