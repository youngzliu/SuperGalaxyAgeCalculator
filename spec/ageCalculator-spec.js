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
    expect(reusableAgeCalculator.convertMercury(30)).toEqual(125);
  });

  it("should convert age of object to Venus years when no parameters are specified.", function() {
    expect(reusableAgeCalculator.convertVenus()).toEqual(45.16);
  });

  it("should convert specified age to Venus years", function() {
    expect(reusableAgeCalculator.convertVenus(30)).toEqual(48.39);
  });

  it("should convert age of object to Mars years when no parameters are specified.", function() {
    expect(reusableAgeCalculator.convertMars()).toEqual(14.89);
  });

  it("should convert specified age to Mars years", function() {
    expect(reusableAgeCalculator.convertMars(30)).toEqual(15.96);
  });

  it("should convert age of object to Jupiter years when no parameters are specified.", function() {
    expect(reusableAgeCalculator.convertJupiter()).toEqual(2.36);
  });

  it("should convert specified age to Jupiter years", function() {
    expect(reusableAgeCalculator.convertJupiter(30)).toEqual(2.53);
  });

  it("should calculate the expectancy of how many years left based on lifestyle choices.", function() {
    expect(reusableAgeCalculator.getExpectancy()).toEqual(75.88);
  });
});
