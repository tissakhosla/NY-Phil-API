let seasonData = require('./1974-75-to-1982-83.json')
const Program = require('../models/Program')


seasonData = seasonData.map(value=>{ //noah
  value.works = value.works.map(input=>{
    
    if(input.composerName){
      input.composerName = input.composerName.replace(/[^\w\s]/gi, '');
      input.composerName = input.composerName.replace(/\s\s+/g, ' ');
    }
    // console.log(input);
    return input;
  })
  return value;
})

const programData = seasonData.map(program => {

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