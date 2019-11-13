const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const soloistsSchema = new Schema({
  name: String,
  instrument: String,
  role: String
})

const worksSchema = new Schema({
  programID: String,
  interval: String,
  composer: String,
  title: String,
  movement: String,
  conductor: String,
  soloists: [soloistsSchema]
})

const concertsSchema = new Schema({
  eventType: String,
  location: String,
  venue: String,
  date: String,
  time: String
})

const programSchema = new Schema({
  performanceID: String,
  programID: String,
  orchestra: String,
  season: String,
  concerts: [concertsSchema],
  works: [worksSchema]
})

module.exports = mongoose.model("Program", programSchema)
