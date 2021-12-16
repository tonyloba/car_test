const chai = require('chai'); // 1
const assert = chai.assert;

const shouldBuyCar = require('../shouldBuyCar.js'); // 2

//template:
// describe("#shouldBuyCar()", function() { // 3

//   it("should return false if it's a hatchback", function() { // 4

//   });

// });

describe("#shouldBuyCar()", function() {

  it("should return false if it's a hatchback", function() {
    const car = {
      type: "hatchback"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });
});

describe("#shouldBuyCar()", function() {

  it("should return true if it's a pink", function() {
    const car = {
      color: "pink"
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

});



// true
describe("#shouldBuyCar()", function() {

  it("should return true if car price <= 5000 and litresPer100km: >= 6", function() {
    const car = {
      price: "4999",
      litresPer100km: 6 
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
});

describe("#shouldBuyCar()", function() {

  it("should return true if car price <= 5000 and litresPer100km: <= 11", function() {
    const car = {
      price: "4999",
      litresPer100km: 11 
    };
    const shouldBuy = shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });
});


// false 
  describe("#shouldBuyCar()", function() {

    it("should return false if car price >= 5000 and litresPer100km: > 11", function() {
      const car = {
        price: "5001",
        litresPer100km: 12
      };
      const shouldBuy = shouldBuyCar(car);
      assert.isFalse(shouldBuy);
    });
  
  });

  describe("#shouldBuyCar()", function() {

    it("should return false if car price >= 5000 and litresPer100km: < 6", function() {
      const car = {
        price: "5001",
        litresPer100km: 5
      };
      const shouldBuy = shouldBuyCar(car);
      assert.isFalse(shouldBuy);
    });
  
  });

  // no car
  
  // describe("#shouldBuyCar()", function() {

  //   it("should return false if it's undefined", function() {
  //       car === undefined;
  //     const shouldBuy = shouldBuyCar(car);
  //     assert.isFalse(shouldBuy);
  //   });
  // });