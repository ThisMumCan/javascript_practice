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
/*
if people =< 40 return 1 bus
else if people => need more than one bus
return number of buses required
maths number of people/40 = number of buses.rounded up?


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
