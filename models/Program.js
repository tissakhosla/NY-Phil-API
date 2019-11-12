const mongoose = require("../db/connection.js");
const Schema = mongoose.Schema;

const soloistsSchema = new Schema({
  name: String,
  instrument: String,
  rolesSATBX: String
})

const worksSchema = new Schema({
  programId: String,
  composerName: String,
  workTitle: String,
  movement: String,
  conductorName: String,
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
  philId: String,
  programId: String,
  orchestra: String,
  season: String,
  concerts: [concertsSchema],
  works: [worksSchema]
})

module.exports = mongoose.model("Program", programSchema)
