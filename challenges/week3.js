function getSquares(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.map(function (nums) {
    return Math.pow(nums, 2);
  });
}

function camelCaseWords(words) {
  if (!words) throw new Error("words is required");


  const firstChar = words[0].toLowerCase();
  const otherWords = words(1) //locate words after postion 0 in index
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
}
  /*if menu.indexOf(ingredient) > -1;
  {
    return false;
  
  else return true;
  }
}

/*
searches array for named ingredient returns true if found else returns false
boolean
indexOf()
*/

function duplicateNumbers(arr1, arr2) {
  if (!arr1) throw new Error("arr1 is required");
  if (!arr2) throw new Error("arr2 is required");

  var bothArrays = arr1.concat(arr2);
  var findDuplicates =bothArrays.filter(duplicateNumbers)
  var makeNewArray= findDuplicates.push()
  return makeNewArray.sort();

}
/*
concat() returns a copy of both arrays
search for duplicates
.push adds elements to new array
return single array in ascending order with no repeated duplicated number
function removeDuplicateUsingFilter(arr){
    let unique_array = arr.filter(function(elem, index, self) {
        return index == self.indexOf(elem);
    });
    return unique_array
}

*/
module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
