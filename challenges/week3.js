function getSquares(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.map(function (nums) {
    return Math.pow(nums, 2);
  });
}

function camelCaseWords(words) {
  if (!words) throw new Error("words is required");


  const firstChar = words[0].toLowerCase();
  const otherWords = words[1] //locate words after postion 0 in index
  const uppercase = otherWords[1].toUpperCase(); //Capital all words after this
  const restOfWords = words.slice(1);
  const fullWord = firstChar + uppercase + restOfWords;
  return fullWord
}


/*

more than one word
get array of words.join()?
remove capitals
adds capitals to all words after
returns as a string without spacestrim()?

*/
function getTotalSubjects(people) {
  if (!people) throw new Error("people is required");
  var getTotalSubjects = 0;
  for (var i = 0; i < people.length; ++i) {
    if (people.subjects[i] == "Subjects")
      getTotalSubjects++;
  }
  return getTotalSubjects
}

/*
search array for subjects
count the results and add together
return the sum of subjects studied
*/

function checkIngredients(menu, ingredient) {
  if (!menu) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let foundFoodItem = false;

  menu.forEach(function (menuItem) {
    menuItem.ingredients.forEach(function (menuItemIngredient) {
      if (menuItemIngredient === ingredient) {
        foundFoodItem = true;
      }
    });
  });
  return foundFoodItem;
}
/*
searches array for named ingredient returns false if found else returns true
boolean
indexOf() returns -1 if searched item isnt returned
*/

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");
const makeNewArray = [];
  var bothArrays = arr1.concat(arr2);
  var findDuplicates = bothArrays.filter(duplicateNumbers)
  var duplicateNumbers =(nums === nums)
  var NewArray = findDuplicates.push()
  return makeNewArray.sort();

}
/*
concat() returns a copy of both arrays
search for duplicates
.push adds elements to new array
Harriets solution:
const duplicates = [];

arr1.forEach(function (num){
  const numIsInArr2 = arr2.includes(num);
  if (numIsInArr2 {
    const duplicatesContainsNum === false {
      duplicates.push(num);
    }
    }
  });
  return duplicates.sort.(function(a, b) {return a-b});
}

*/
module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
