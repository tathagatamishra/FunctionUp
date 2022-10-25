
const express = require('express');
const router = express.Router();

const bookModel = require("../models/bookModel.js")

const bookController = require("../controllers/bookController")



router.post("/publish", bookController.publishBook)

router.get("/search", bookController.searchBook)

module.exports = router;