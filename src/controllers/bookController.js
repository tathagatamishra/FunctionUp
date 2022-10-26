// const { count } = require("console")
const bookModel = require("../models/bookModel")


const createBook = async function (req, res) {

    let bookData = req.body
    let savedData = await bookModel.create(bookData)
    res.send({ msg: savedData })
}

const bookList = async function (req, res) {

    let allBooks = await bookModel.find().select({bookName:1, authorName: 1, _id: 0})
    res.send({ msg: allBooks })
}

const getBookByYear = async function (req, res) {

    let queryYear = req.params.publishYear
    let bookByYear = await bookModel.find( { year: queryYear } )
    res.send({ msg: bookByYear })
}

const getParticularBook = async function (req, res) {

    let theBook = req.body
    // console.log(theBook);
    let particularBook = await bookModel.find( theBook )
    res.send({ msg: particularBook })
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBookByYear = getBookByYear
module.exports.getParticularBook = getParticularBook