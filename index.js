const express = require('express');
const app = express();

const parser = require('body-parser')

app.use(parser.json())
app.use(require('./routes/tissa'))

app.listen(5000, function(req, res) {
  console.log("Listening on port 5000")
});

