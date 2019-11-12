const mongoose = require("mongoose")

mongoose.connect(
  "mongodb://localhost/NY-Philharmonic", 
  { useNewUrlParser: true, useUnifiedTopology: true  }
  )

module.exports = mongoose;
