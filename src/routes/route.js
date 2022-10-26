const express = require('express')
const router = express.Router()
const bookModel = require("../models/bookModel")

const bookController = require("../controllers/bookController")

router.get("/bookstore", function (req, res) {
    res.send("BOOK STORE IS OPEN !")
})


router.post("/bookstore/createBook", bookController.createBook)

router.get("/bookstore/bookList", bookController.bookList)

router.post("/bookstore/:publishYear", bookController.getBookByYear)

router.get("/bookstore/specificBook", bookController.getParticularBook)

router.get("/bookstore/searchByPrice", bookController.getXINRBooks)

router.get("/bookstore/randomBook", bookController.getRandomBooks)

module.exports = router