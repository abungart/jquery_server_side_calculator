$(document).ready(init);

function init() {
  console.log("In init");
  $(".btn_equals").on("click", compute);
  $(".num").on("click", numEntry);
  $(".operator").on("click", operatorEntry);
  $(".btn_clear").on("click", clearField);
}

function clearField() {
  console.log("In clear");
}

function compute() {
  console.log("Calculating");
}

function numEntry() {
  let thisNumber = $(this).data("index");
  console.log(thisNumber);
}

function operatorEntry() {
  let operator = $(this).data("index");
  console.log(operator);
}
