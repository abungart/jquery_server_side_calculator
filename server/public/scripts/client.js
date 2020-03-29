$(document).ready(init);

let problemString = { number: "" };
let answer = [];

function init() {
  console.log("In init");
  $(".btn_equals").on("click", submitMathNumber);
  $(".num").on("click", numEntry);
  $(".operator").on("click", operatorEntry);
  $(".btn_clear").on("click", clearField);
}

function clearField() {
  console.log("In clear");
  $(".input_box").val("");
  problemString.number = "";
}

function compute() {
  $.ajax({
    // .ajax() returns a Promise
    method: "GET",
    url: "/math"
  })
    .then(response => {
      console.log(response);
      answer = response;
      render();
    }) // handles a successful response
    .catch(err => {
      console.log(err);
    }); // catch handles errors
}

function numEntry() {
  let thisNumber = $(this)
    .data("index")
    .toString();
  console.log(thisNumber);
  problemString.number = problemString.number + thisNumber;
  $(".input_box").val(problemString.number);
}

function operatorEntry() {
  let operator = $(this).data("index");
  console.log(operator);
  problemString.number = problemString.number + operator;
  $(".input_box").val(problemString.number);
}

function render() {
  console.log("in render");
  console.log(answer);
}

function saveMathNumber(mathData) {
  $.ajax({
    // .ajax() returns a Promise
    method: "POST",
    url: "/math",
    data: mathData
  })
    .then(response => {
      console.log(response);
      compute();
    }) // handles a successful response
    .catch(err => {
      console.log(err);
    }); // catch handles errors
}

function submitMathNumber() {
  console.log("in Submit");
  saveMathNumber(problemString);
}
