console.log("I am a Server");
const express = require("express");
const bodyParser = require("body-parser");

let newProblem = require("./modules/problemHistory");

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("server/public"));

app.get("/math", (req, res) => {
  res.send(newProblem);
});

app.post("/math", (req, res) => {
  const newEquation = req.body;
  const mathAnswer = {
    problem: newEquation.number,
    answer: eval(newEquation.number)
  };
  console.log("new Equation: ", mathAnswer);
  newProblem.push(mathAnswer);

  res.sendStatus(201);
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
