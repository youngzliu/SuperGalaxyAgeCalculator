import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import { AgeCalulator } from './ageCalculator.js';

$(document).ready(function() {
  $('#galaxyForm').submit(function(event) {
    event.preventDefault();
    // var goal = $('#goal').val();
    // var output = pingPong(goal);
    // output.forEach(function(element) {
    //   $('#solution').append("<li>" + element + "</li>");
    // });
  });
});
