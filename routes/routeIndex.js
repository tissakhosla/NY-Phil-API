const express = require('express')
const expRouter = express.Router()
const programController = require('../controllers/programController')

expRouter.get("/", programController.redirect); //r

expRouter.use('/program', require('./programRoute'))
// expRouter.use("/conductor", require('./conductorRoute'))

module.exports = expRouter
