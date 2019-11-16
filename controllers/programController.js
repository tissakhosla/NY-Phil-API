const Program = require('../models/Program');

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

  lookUpBySeason: function (req, res) { //r
    Program.find({ season: req.params.season })
      .then(programs => res.json(programs))
  },

  lookUpByEvent: function (req, res) {
    Program.find({ concerts: { $elemMatch: { eventType: req.params.eventType } } })
      .then(program => res.json(program))
  },

  lookUpByLocation: function (req, res) {
    Program.find({ concerts: { $elemMatch: { location: req.params.location } } })
      .then(program => res.json(program))
  },

  lookUpByVenue: function (req, res) {
    Program.find({ concerts: { $elemMatch: { venue: req.params.venue } } })
      .then(program => res.json(program))
  },

  lookUpBySoloist: function (req, res) {
    Program.find({ works: { $elemMatch: { soloists: { $elemMatch: { name: req.params.soloist } } } } })
      .then(program => res.json(program))
  },

  lookUpByInstrument: function (req, res) {
    Program.find({ works: { $elemMatch: { soloists: { $elemMatch: { instrument: req.params.instrument } } } } })
      .then(program => res.json(program))
  },

  lookUpByComposer: function (req, res) {
    Program.find({ works: { $elemMatch: { composer: req.params.composer } } })
      .then(program => res.json(program))
  },

  lookUpByTitle: function (req, res) {
    Program.find({ works: { $elemMatch: { title: req.params.title } } })
      .then(program => res.json(program))
  },

  lookUpById: function (req, res) { //r
    Program.findOne({ _id: req.params._id })
      .then(programs => res.json(programs))
  },

  new: function (req, res) { //c
    Program.create(req.body)
      .then(performance => res.json(performance))
  },

  editById: function (req, res) { //u
    Program.findOneAndUpdate({ _id: req.params._id }, req.body, { new: true, useFindAndModify: false })
      .then(program => {
        res.json(program)
      })
  },

  deleteById: function (req, res) { //d
    Program.findOneAndDelete({ _id: req.params._id }, { useFindAndModify: false })
      .then(program => {
        res.json(program)
      })
  }
}


module.exports = programController
  // module.exports = innerController