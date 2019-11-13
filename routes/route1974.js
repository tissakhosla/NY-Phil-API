const express = require('express')
const router = express()
const mainController = require('../mainController')

router.get("/", mainController.redirect);
router.get("/programs", mainController.index); //r
router.get("/programs/orchestra/:orchestra", mainController.lookUpByOrchestra) //r
router.get("/programs/_id/:_id", mainController.lookUpById) //r
router.post("/programs", mainController.new) //c
router.put("/programs/_id/:_id", mainController.editById) //u
router.delete("/programs/_id/:_id", mainController.deleteById) //d

module.exports = router