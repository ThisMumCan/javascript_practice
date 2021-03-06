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

  const integers = []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const findIntegers = Number.isInteger(num)
    if (findIntegers === true) {
      integers.push(num);
    }
  }
  return integers;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  const cities = []
  for (let i = 0; i < users.length; i++) {
    const user = users[i]
    const findCities = user.data.city.displayName;
    cities.push(findCities)
  }

  return cities
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const squareRoots = nums.map(function (num) {
    const getSquareRoot = Math.sqrt(num);
    return getSquareRoot.toFixed(2)
  })
  return squareRoots
}
/*
failing as it rounds whole number (6) to 2 square places!
*/
function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  const matchedSentences = [];
  for (let i = 0; i < sentences.length; i++) {
    const sentence = sentences[i]
    const findMatch = sentence.find("str")
    if (sentence === "str") {

      matchedSentences.push(findMatch)
    }

    return matchedSentences
  }
}

/*
find search sentences for the str
return the whole sentence
*/
function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  const largestNumbers = [];

  triangles.forEach(function (triangle) {
    triangle.sort(function (a, b) {
      return b - a;
    });
    const largestNumber = triangle[0]
    largestNumbers.push(largestNumber);
  })
  return largestNumbers;
}
/*
order the arrays 
find highest
return all highest values to array
*/
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
