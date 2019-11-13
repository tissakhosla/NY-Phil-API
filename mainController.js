const Program = require('./models/Program');

const mainController = {
  redirect: function (req, res) {
    res.redirect("/programs")
  },
  index: function (req, res) {
    Program.find({})
      .then(programsObjsArray => res.json(programsObjsArray))
  }
}

module.exports = mainController