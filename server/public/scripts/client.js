$(document).ready(init);

let problemString = { number: "" };
let answer = [];

function init() {
  console.log("In init");
  $(".btn_equals").on("click", submitMathNumber);
  $(".num").on("click", numEntry);
  $(".operator").on("click", operatorEntry);
  $(".btn_clear").on("click", clearField);
  $(".btn_delete").on("click", deleteItem);
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

function deleteItem() {
  problemString.number = problemString.number.slice(
    0,
    problemString.number.length - 1
  );
  $(".input_box").val(problemString.number);
}

function numEntry() {
  let thisNumber = $(this)
    .data("index")
    .toString();
  console.log(thisNumber);
  problemString.number = problemString.number + thisNumber;
  $(".input_box").val(problemString.number);
  $(".operator").removeAttr("disabled");
}

function operatorEntry() {
  let operator = $(this).data("index");
  console.log(operator);
  problemString.number = problemString.number + operator;
  $(".input_box").val(problemString.number);
  $(".operator").attr("disabled", true);
}

function render() {
  console.log("in render");
  let thisAnswer = answer[answer.length - 1];
  console.log(thisAnswer);

  $(".input_box").val("");
  problemString.number = "";
  $(".answer").empty();
  $(".history_list").empty();
  $(".answer").append(`${thisAnswer.problem} = ${thisAnswer.answer}`);

  for (let i = 0; i < answer.length; i++) {
    const answerItem = answer[i];

    $(".history_list").append(`
      <p>${answerItem.problem} = ${answerItem.answer}</p>
    `);
  }
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
  if (
    problemString.number.includes("+") ||
    problemString.number.includes("-") ||
    problemString.number.includes("*") ||
    problemString.number.includes("/")
  ) {
    console.log("in Submit");
    saveMathNumber(problemString);
  } else {
    alert("Not an Equation!");
  }
}
