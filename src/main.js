import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { AgeCalculator } from './ageCalculator.js';

$(document).ready(function() {
  $('#galaxyForm').submit(function(event) {
    event.preventDefault();
    $("#results").empty();
    let age = parseFloat($("#age").val());
    let gender = $("input:radio[name=gender]:checked").val();
    let excercise = parseInt($("#exerciseInput").val());
    let badHabits = 0;
    $("input:checkbox[name=habits]:checked").each(function(){
      badHabits++;
    });
    let income = parseInt($("#incomeInput").val());
    let ageCalculator = new AgeCalculator(age, gender, excercise, badHabits, income);
    $("#results").append(`<h4>Your age in Mercury years is ${ageCalculator.convertMercury()} years.</h4>`);
    $("#results").append(`<h4>Your age in Venus years is ${ageCalculator.convertVenus()} years.</h4>`);
    $("#results").append(`<h4>Your age in Mars years is ${ageCalculator.convertMars()} years.</h4>`);
    $("#results").append(`<h4>Your age in Jupiter years is ${ageCalculator.convertJupiter()} years.</h4>`);
    let expectancy = ageCalculator.getExpectancy();
    if (expectancy > 0){
      $("#results").append(`<h4>According to average life expectancy and based on the information you have submitted, you have ${expectancy} years left to live. Make the most out of it!</h4>`);
      $("#results").append(`<h4>This means you have ${ageCalculator.convertMercury(expectancy)} years left to live in Mercury years. Make the most out of it!</h4>`);
      $("#results").append(`<h4>This means you have ${ageCalculator.convertVenus(expectancy)} years left to live in Venus years. Make the most out of it!</h4>`);
      $("#results").append(`<h4>This means you have ${ageCalculator.convertMars(expectancy)} years left to live in Mars years. Make the most out of it!</h4>`);
      $("#results").append(`<h4>This means you have ${ageCalculator.convertJupiter(expectancy)} years left to live in Jupiter years. Make the most out of it!</h4>`);
    }
    else if(expectancy === 0){
      $("#results").append("According to our predictions you should die right about now. Hm. I would sleep with one eye open if I were you.");
    }
    else{
      expectancy = Math.abs(expectancy);
      $("#results").append(`<h4>Congratulations! You have surpassed your average life expectancy by ${expectancy} years. Most impressive! You are one tenacious person.</h4>`);
      $("#results").append(`<h4>In Mercury years you have surpassed your life expectancy by ${ageCalculator.convertMercury(expectancy)} years. Most impressive! You are one tenacious person.</h4>`);
      $("#results").append(`<h4>In Venus years you have surpassed your life expectancy by ${ageCalculator.convertVenus(expectancy)} years. Most impressive! You are one tenacious person.</h4>`);
      $("#results").append(`<h4>In Mars years you have surpassed your life expectancy by ${ageCalculator.convertMars(expectancy)} years. Most impressive! You are one tenacious person.</h4>`);
      $("#results").append(`<h4>In Jupiter years you have surpassed your life expectancy by ${ageCalculator.convertJupiter(expectancy)} years. Most impressive! You are one tenacious person.</h4>`);
    }
  });
});
