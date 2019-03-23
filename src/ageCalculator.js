export class AgeCalculator{
  constructor(age, gender, exercise, badHabits, income){
    this.age = age;
    this.gender = gender;
    this.exercise = exercise;
    this.badHabits = badHabits;
    this.income = income;
  }

  convertMercury(age = 0){
    const mercCoeff = .24;
    if (age === 0){
      return this.age / mercCoeff;
    }
    return age * mercCoeff;
  }

  convertVenus(age = 0){
    const venusCoeff = .62;
    if (age === 0){
      return this.age / venusCoeff;
    }
    return age * venusCoeff;
  }

  convertMars(age = 0){
    const marsCoeff = 1.88;
    if (age === 0){
      return this.age / marsCoeff;
    }
    return age * marsCoeff;
  }

  convertJupiter(age = 0){
    const jupCoeff = 11.86;
    if (age === 0){
      return this.age / jupCoeff;
    }
    return age * jupCoeff;
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
    ageMultiplier += income * .03;
    let expectedAge = averageAge * ageMultiplier;
    return expectedAge - this.age;
  }
}
