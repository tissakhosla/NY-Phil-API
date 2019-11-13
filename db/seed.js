const seasonData = require('./1974-75-to-1982-83.json')
const Program = require('../models/Program')

const programData = seasonData.map(program => {

  const concertArray = program.concerts.map(concert => {
    const newConcerts = {}
    newConcerts.eventType = concert.eventType,
    newConcerts.location = concert.Location,
    newConcerts.venue = concert.Venue,
    newConcerts.date = concert.Date
    newConcerts.time = concert.Time
    return newConcerts
  })

  const workData = program.works.map(work => {

    const soloistData = work.soloists.map(soloist => {
      const newSoloists = {};
      newSoloists.name = soloist.soloistName,
      newSoloists.instrument = soloist.soloistInstrument,
      newSoloists.role = soloist.soloistRoles

      // console.log(newSoloists)
      return newSoloists
    })
    const newWorks = {};
    newWorks.programID = work.ID,
    newWorks.interval = work.interval,
    newWorks.composer = work.composerName,
    newWorks.title = work.workTitle,
    newWorks.movement = work.movement,
    newWorks.conductor = work.conductorName,
    console.log(soloistData)
    newWorks.soloists = soloistData

    return newWorks
  })

  const newProgram = {};
  newProgram.performanceID = program.performanceID,
  newProgram.programID = program.programID,
  newProgram.orchestra = program.orchestra,
  newProgram.season = program.season,
  newProgram.concerts = concertArray,
  newProgram.works = workData
  return newProgram
})

Program.deleteMany({}).then(() => {
  Program.create(programData).then(programsArray => {
    console.log(programsArray.length);
    process.exit();
  });
});