const express = require('express')
const router = express()
const programController = require('../controllers/programController')
// const innerController = require('../controllers/programController')


router.get("/", programController.index); //r
router.get("/composer/:composer", programController.lookUpByComposer) //r
router.get("/orchestra/:orchestra", programController.lookUpByOrchestra) //r
router.get("/id/:_id", programController.lookUpById) //r
router.post("/", programController.new) //c
router.put("/id/:_id", programController.editById) //u
router.delete("/id/:_id", programController.deleteById) //d

module.exports = router