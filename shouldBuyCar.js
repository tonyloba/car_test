const shouldBuyCar = function(car) {
  if (car === undefined) {
    return undefined;
  }

  if (car.type && car.type.toLowerCase() === "hatchback") {
    return false;
  }

  if (car.color && car.color.toLowerCase() === "pink") {
    return true;
  }

  const goodLitres = car.litresPer100km && car.litresPer100km >= 6 && car.litresPer100km <= 11;
  const goodPrice = car.price && car.price <= 5000;

  if (goodLitres && goodPrice) {
    return true;
  }

  return false;
}

module.exports = shouldBuyCar;


// package.json:
// "scripts": {
//   "test": "echo \"Error: no test specified\" && exit 1"
//   //"test": "./node_modules/mocha/bin/mocha"
// },