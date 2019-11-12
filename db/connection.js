const mongoose = require("mongoose")

mongoose.connect(
  "mongodb://localhost/ny-philharmonic", 
  { useNewUrlParser: true, useUnifiedTopology: true  }
  )

module.exports = mongoose;
