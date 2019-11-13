const Program = require('./models/Program');

const programController = {
  redirect: function (req, res) { //c
    res.redirect("/program")
  },

  index: function (req, res) { //r
    Program.find({})
      .then(programsObjsArray => res.json(programsObjsArray))
  },

  lookUpByOrchestra: function (req, res) { //r
    Program.find({ orchestra: req.params.orchestra })
      .then(programs => res.json(programs))
  },

  lookUpById: function (req, res) { //r
    Program.findOne({ _id: req.params._id })
      .then(programs => res.json(programs))
  },

  new: function(req, res) { //c
    Program.create(req.body)
      .then(performance => res.json(performance))
  },

  editById: function(req, res) { //u
    Program.findOneAndUpdate({_id: req.params._id}, req.body, { new: true, useFindAndModify: false })
      .then(program => {
        res.json(program)
      })
  },

  deleteById: function(req, res) { //d
    Program.findOneAndDelete({_id: req.params._id}, { useFindAndModify: false })
      .then(program => {
        res.json(program)
      })
  }
}

module.exports = programController