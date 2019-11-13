const express = require('express')
const router = express()
const programController = require('../controllers/programController')

router.get("/", programController.index); //r
router.get("/orchestra/:orchestra", programController.lookUpByOrchestra) //r
router.get("/_id/:_id", programController.lookUpById) //r
router.post("/", programController.new) //c
router.put("/_id/:_id", programController.editById) //u
router.delete("/_id/:_id", programController.deleteById) //d
// router.get('/:id/conductor/:name')


module.exports = router