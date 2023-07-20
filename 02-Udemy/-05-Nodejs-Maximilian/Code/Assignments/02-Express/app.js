const express = require("express");

const app = express();

app.use("/users", (req, res, next) => {
  console.log("second");
  res.send("<h1>welcome user</h1>");
});

app.use("/", (req, res, next) => {
  console.log("first");
  res.send("<h1>welcome to main page!</h1>");
});

app.listen(3000);
