import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { AgeCalculator } from './ageCalculator.js';

$(document).ready(function() {
  $('#galaxyForm').submit(function(event) {
    event.preventDefault();
    let age = parseFloat($("#age").val());
    let gender = $("input:radio[name=gender]:checked").val();
    let excercise = parseInt($("#exerciseInput").val());
    let badHabits = 0;
    $("input:checkbox[name=habits]:checked").each(function(){
      badHabits++;
    });
    let income = parseInt($("#incomeInput").val());
    let ageCalculator = new AgeCalculator(age, gender, excercise, badHabits, income);
  });
});
