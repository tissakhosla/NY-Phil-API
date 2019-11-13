const express = require('express')
const router = express()
const mainController = require('../mainController')

router.get("/", mainController.redirect);
router.get("/programs", mainController.index); //r
router.get("/programs/orchestra/:orchestra", mainController.orchestra) //r
router.post("/programs", mainController.new) //c

module.exports = router