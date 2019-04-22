function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");

  return sandwich.fillings
}


function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");

  if (person.city === "Manchester") {
    return true;
  }
  else {
    return false;
  }
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const additionalBuses = people / 40

  if (people <= 40) {
    return 1;
  }
  else if (people > 40) {
    return Math.ceil(additionalBuses)
  }
}

function countSheep(arr) {
  if (!arr) throw new Error("arr is required");
  var countSheep = 0;
  for (var i = 0; i < arr.length; ++i) {
    if (arr[i] == "sheep")
      countSheep++;
  }
  return countSheep
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.address.city === "Manchester") {
    return true;
  }
  else {
    return false;
  }
}


/*
if person has M postcode return true
look at first two letters of postcode -charAt()? 
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