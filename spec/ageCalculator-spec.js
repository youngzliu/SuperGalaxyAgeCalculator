import { AgeCalculator } from "./../src/ageCalculator.js"

describe("Age Calculator", function() {

  let reusableAgeCalculator;

  beforeEach(function(){
    reusableAgeCalculator = new AgeCalculator(28, "female", 3, 1, 4);
  });

  it("should create an AgeCalculator object", function() {
    expect(reusableAgeCalculator instanceof AgeCalculator).toEqual(true);
  });

  it("should convert age of object to Mercury years when no parameters are specified.", function() {
    expect(reusableAgeCalculator.convertMercury()).toEqual(116.67);
  });

  it("should convert specified age to Mercury years", function() {
    expect(reusableAgeCalculator.convertMercury(5)).toEqual(20.83);
  });


});
