const Program = require('./models/Program');

const mainController = {
  redirect: function (req, res) {
    res.redirect("/programs")
  },

  index: function (req, res) { //r
    Program.find({})
      .then(programsObjsArray => res.json(programsObjsArray))
  },

  orchestra: function (req, res) { //r
    Program.findOne({ orchestra: req.params.orchestra })
      .then(programs => res.json(programs))
  },

  new: function(req, res) { //c
    Program.create(req.body)
      .then(performance => res.json(performance))
  }
}

module.exports = mainController