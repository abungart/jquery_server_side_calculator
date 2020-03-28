$(document).ready(init);

let problemString = "";
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
  problemString = "";
}

function compute() {
  //   $.ajax({
  //     // .ajax() returns a Promise
  //     method: "GET",
  //     url: "/compute"
  //   })
  //     .then(response => {
  //       console.log(response);
  //       answer = response;
  //       //  CALL RENDER
  //     }) // handles a successful response
  //     .catch(err => {
  //       console.log(err);
  //     }); // catch handles errors
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
