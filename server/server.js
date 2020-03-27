console.log("I am a Server");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static("server/public"));

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});