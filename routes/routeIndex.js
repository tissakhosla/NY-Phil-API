const express = require('express')
const expRouter = express.Router()
// const programController = require('../programController')


expRouter.use('/program', require('./programRoute'))
// expRouter.use("/conductor", require('./conductorRoute'))

module.exports = expRouter
