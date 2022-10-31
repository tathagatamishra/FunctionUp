const express = require('express');
const router = express.Router();

const authorController = require("../controllers/authorController")
const pubController = require("../controllers/publisherController")
const bookController = require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor)
router.post("/createPub", pubController.createPub)
router.post("/createBook", bookController.createBook)


router.get("/getAuthorsData", authorController.getAuthorsData)
router.get("/getPubData", pubController.getPubData)
router.get("/getBooksData", bookController.getBooksData)


router.get("/BooksWithAuthor", bookController.getBooksNauthorDetails)

router.get("/updateFalseBookCover", bookController.falseCoverUpdate)

router.get("/updateTrueBookCover", bookController.trueCoverUpdate)

router.get("/updatePrice", bookController.priceUpdate)

module.exports = router;