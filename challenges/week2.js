function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  sandwich.forEach(function (bread) {
    const breadType = bread.type;
    if (breadType === "sourdough") {
      return "brie", "relish", "lettuce";
    }
    else if (breadType === "rye") {
      return "smoked salmon", "dill";
    }
  }


/*
if bread = sourdough
return brie relish lettuce

else if bread = rye
return smoked salmon dill
sandwich 1 = 
bread = sourdough
fillings = brie relish lettuce
accompaniment = crisps
return = fillings

sandwich 2
bread = rye
fillings = smoked salmon dill
accomianment = crisps
return fillings

*/

function isFromManchester(person) {
      if (person === undefined) throw new Error("person is required");
      // Your code here!
    }
/*
*/
function getBusNumbers(people) {
      if (people === undefined) throw new Error("people is required");
      // Your code here!
    }
/*
*/
function countSheep(arr) {
      if (!arr) throw new Error("arr is required");
      // Your code here!
    }
/*
*/
function hasMPostCode(person) {
      if (person === undefined) throw new Error("person is required");
      // Your code here!
    }
/*
*/
module.exports = {
      getFillings,
      isFromManchester,
      countSheep,
      getBusNumbers,
      hasMPostCode
    };
