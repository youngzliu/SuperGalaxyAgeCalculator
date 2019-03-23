export class AgeCalculator{
  constructor(age, gender, exercise, badHabits, income){
    this.age = age;
    this.gender = gender;
    this.exercise = exercise;
    this.badHabits = badHabits;
    this.income = income;
  }

  //Age parameter can be specified to not calculate from age of this object.
  //This is done to allow converting of the expectancy years.
  convertMercury(age = 0){
    const mercCoeff = .24;
    if (age === 0){
      return parseFloat((this.age / mercCoeff).toFixed(2));
    }
    return parseFloat((age / mercCoeff).toFixed(2));
  }

  convertVenus(age = 0){
    const venusCoeff = .62;
    if (age === 0){
      return parseFloat((this.age / venusCoeff).toFixed(2));
    }
    return parseFloat((age / venusCoeff).toFixed(2));
  }

  convertMars(age = 0){
    const marsCoeff = 1.88;
    if (age === 0){
      return parseFloat((this.age / marsCoeff).toFixed(2));
    }
    return parseFloat((age / marsCoeff).toFixed(2));
  }

  convertJupiter(age = 0){
    const jupCoeff = 11.86;
    if (age === 0){
      return parseFloat((this.age / jupCoeff).toFixed(2));
    }
    return parseFloat((age / jupCoeff).toFixed(2));
  }

  getExpectancy(){
    const averageAge = 78.7;
    let ageMultiplier = 1;
    if(this.gender === "female"){
      ageMultiplier += .1;
    }
    else if(this.gender === "male"){
      ageMultiplier -= .1;
    }
    ageMultiplier += this.exercise * .05;
    ageMultiplier -= this.badHabits * .05;
    ageMultiplier += this.income * .03;
    let expectedAge = averageAge * ageMultiplier;
    return parseFloat((expectedAge - this.age).toFixed(2));
  }
}
