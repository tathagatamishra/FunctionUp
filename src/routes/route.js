const express = require('express')
const router = express.Router()
const bookModel = require("../models/bookModel")


const bookController = require("../controllers/bookController")

router.get("/bookstore", function (req, res) {
    res.send("BOOK STORE IS OPEN !")
})


router.post("/bookstore/createBook", bookController.createBook)

router.get("/bookstore/bookList", bookController.bookList)

router.post("/bookstore/:publishYear", async function (req, res) {

    let queryYear = req.params.publishYear
    let bookByYear = await bookModel.find( { year: queryYear } )
    res.send({ msg: bookByYear })
})

router.post("/bookstore/getParticularBooks", function (req, res) {

    let x = req.body
    // let theBook = await bookModel.find( {bookName: deepSearch} )
    console.log(x);
    res.send("deepSearch")
})

module.exports = router