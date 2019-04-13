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

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  person.forEach(function (city) {
    const cityType = city.type;
    if (cityType === "Manchester") {
      return "true";
    }
    else {
      return "false";
    }
  
function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const additionalBuses = people/40

  if (people <= 40){
    return 1;
  }
  else if (people > 40){
    return 1 + math.ceil(additionalBuses)
  }
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  var animals  = [];
  var findSheep = animals.indexOf("sheep");
  return value0f(findSheep);
}
/*
search array for sheep indexOf()
return the total number of sheep
*/

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
}

/*
if person has M postcode return true
else 
return false
*/
 module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};