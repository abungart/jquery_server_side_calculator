$(document).ready(init);

let problemString = { number: "" };
let answer = 0;

function init() {
  console.log("In init");
  $(".btn_equals").on("click", saveMathNumber);
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
      //  CALL RENDER
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

function saveMathNumber(mathData) {
  $.ajax({
    // .ajax() returns a Promise
    method: "POST",
    url: "/math",
    data: mathData
  })
    .then(response => {
      console.log(response);
      //  NEXT METHOD
    }) // handles a successful response
    .catch(err => {
      console.log(err);
    }); // catch handles errors
}
