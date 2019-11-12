const seasonData = require('./1974-75-to-1982-83.json')
const Program = require('../models/Program')

const programData = seasonData.map(program => {
  const newProgram = {}
  newProgram.programId = program.programId
  newProgram.house = program.house
  newProgram.start = program.start
  newProgram.end = program.end
  newProgram.endReason = program.endReason
  return newProgram
})



Program.deleteMany({}).then(() => {
  Program.create(programData).then(programsArray => {
    console.log(programsArray.length);
    // process.exit();
  });
});