let NYPData = require('./1974-75-to-1982-83.json')
const Program = require('../models/Program')

NYPData = NYPData.map(performance => {
  performance.season = performance.season.replace(/[^\w\s]/gi, ' to ');

  performance.concerts = performance.concerts.map(concert => {
    if (concert.Location) {
      concert.Location = concert.Location.replace(/[^\w\s]/gi, '');
      concert.Location = concert.Location.replace(/\s\s+/g, ' ');
    }
    return concert
  })

  performance.works = performance.works.map(work => {

    if (work.composerName) {
      work.composerName = work.composerName.replace(/[^\w\s]/gi, ''); //noah - eliminates special characters
      work.composerName = work.composerName.replace(/\s\s+/g, ' '); // makes 2 spaces into one
    }
    if (work.workTitle) {
      work.workTitle = work.workTitle.replace(/[^\w\s]/gi, '');
      work.workTitle = work.workTitle.replace(/\s\s+/g, ' ');
    }
    if (work.conductorName) {
      work.conductorName = work.conductorName.replace(/[^\w\s]/gi, '');
      work.conductorName = work.conductorName.replace(/\s\s+/g, ' ');
    }
    if (work.soloists) {
      work.soloists = work.soloists.map(soloist => {
        soloist.soloistName = soloist.soloistName.replace(/[^\w\s]/gi, '')
        soloist.soloistName = soloist.soloistName.replace(/\s\s+/g, ' ')
        return soloist
      })
    }
    return work;
  })
  return performance;
})

const programData = NYPData.map(program => {

  const concertsArray = program.concerts.map(concert => {
    const newConcerts = {};
    newConcerts.eventType = concert.eventType;
    newConcerts.location = concert.Location;
    newConcerts.venue = concert.Venue;
    newConcerts.date = concert.Date;
    newConcerts.time = concert.Time;
    return newConcerts
  })

  const worksArray = program.works.map(work => {

    const soloistsArray = work.soloists.map(soloist => {
      const newSoloists = {};
      newSoloists.name = soloist.soloistName;
      newSoloists.instrument = soloist.soloistInstrument;
      newSoloists.role = soloist.soloistRoles;
      return newSoloists
    })

    const newWorks = {};
    newWorks.programID = work.ID;
    newWorks.interval = work.interval;
    newWorks.composer = work.composerName;
    newWorks.title = work.workTitle;
    newWorks.movement = work.movement;
    newWorks.conductor = work.conductorName;
    newWorks.soloists = soloistsArray;
    //It would be nice not to display an empty array for soloists whenever there aren't.
    return newWorks
  })

  const newProgram = {};
  newProgram.performanceID = program.performanceID
  newProgram.programID = program.programID
  newProgram.orchestra = program.orchestra
  newProgram.season = program.season
  newProgram.concerts = concertsArray
  newProgram.works = worksArray
  return newProgram
})

Program.deleteMany({}).then(() => {
  Program.create(programData).then(programsArray => {
    console.log(programsArray.length);
    process.exit();
  });
});