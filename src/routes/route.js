
const express = require('express');
const router = express.Router();

const bookController = require("../controllers/bookController")



router.get("/3rdBookStore", function (req, res) {
    res.send("Book Store Is Open !")
})

//--------------------------------

router.post("/3rdBookStore/addAuthor", bookController.createAuthor)

router.post("/3rdBookStore/addBook", bookController.createBook)

router.get("/3rdBookStore/bookAuthor", bookController.bookNauthorData)

router.get("/3rdBookStore/updateData", bookController.updateData)

router.get("/3rdBookStore/BookData", bookController.priceData)

module.exports = router;