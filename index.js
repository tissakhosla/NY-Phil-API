const express = require('express');
const app = express();

const mainController = require('./mainController')

app.get("/", mainController.redirect);

app.get("/programs", mainController.index);

app.listen(5000, function(req, res) {
  console.log("Listening on port 5000")
});

