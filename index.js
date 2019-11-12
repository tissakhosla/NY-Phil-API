const express = require('express');
const app = express();

const Program = require('./models/Program');

app.get("/", function(req, res) {
  res.redirect("/programs")
});

app.get("/programs", function(req, res){
    Program.find({})
      .then(programsObjsArray => res.json(programsObjsArray))
});


app.listen(4000, function(req, res) {
  console.log("Listening on port 4000")
});