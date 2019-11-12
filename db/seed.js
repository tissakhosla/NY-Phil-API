const seasonData = require('./1974-75-to-1982-83.json')
const Program = require('../models/Program')

const programData = seasonData.map(program => {

  const concertData = program.concerts.map(concert => {
    const newConcerts = {}
    newConcerts.eventType = concert.eventType,
      newConcerts.location = concert.Location,
      newConcerts.venue = concert.Venue,
      newConcerts.date = concert.Date
      newConcerts.time = concert.Time
      return newConcerts
  })

  const workData = program.works.map(work => {

    const soloistData = program.concerts.map(soloist => {
      const newSoloists = {}
      newSoloists.name = soloist.soloistName,
        newSoloists.instrument = soloist.soloistInstrument,
        newSoloists.rolesSATBX = soloist.soloist

      return newSoloists
    })

    const newWorks = {}
    newWorks.programId = work.ID,
      newWorks.composer = work.composerName,
      newWorks.title = work.workTitle,
      newWorks.movement = work.movement,
      newWorks.conductor = work.conductorName,
      newWorks.soloists = work.soloistData

    return newWorks
  })

  const newProgram = {}
  newProgram.programId = program.ID,
    newProgram.orchestra = program.orchestra,
    newProgram.season = program.season,
    newProgram.concerts = concertData,
    newProgram.works = workData
  return newProgram
})

Program.deleteMany({}).then(() => {
  Program.create(programData).then(programsArray => {
    console.log(programsArray.length);
    process.exit();
  });
});