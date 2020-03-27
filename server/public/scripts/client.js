$(document).ready(init);

let problemString = "";

function init() {
  console.log("In init");
  $(".btn_equals").on("click", compute);
  $(".num").on("click", numEntry);
  $(".operator").on("click", operatorEntry);
  $(".btn_clear").on("click", clearField);
}

function clearField() {
  console.log("In clear");
  $(".input_box").val("");
}

function compute() {
  console.log("Calculating");
}

function numEntry() {
  let thisNumber = $(this)
    .data("index")
    .toString();
  console.log(thisNumber);
  problemString = problemString + thisNumber;
  $(".input_box").val(problemString);
}

function operatorEntry() {
  let operator = $(this).data("index");
  console.log(operator);
  problemString = problemString + operator;
  $(".input_box").val(problemString);
}
