const seasonData = require('./1974-75-to-1982-83.json')
const Program = require('../models/Program')

Program.deleteMany({}).then(() => {
  Program.create(seasonData).then(programsArray => {
    console.log(programsArray.length);
    // process.exit();
  });
});