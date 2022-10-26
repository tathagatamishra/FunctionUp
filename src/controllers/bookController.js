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

    let theBook = req.query.authorName
    // console.log(typeof theBook)
    let particularBook = await bookModel.findOne( {authorName: theBook} )
    res.send({ msg: particularBook })
}

const getXINRBooks = async function (req, res) {

    let inrBook = await bookModel.find({'price.inr': {$in: [1312, 1148]}})
    res.send({ msg: inrBook })
}

const getRandomBooks = async function (req, res) {

    let randomBook = await bookModel.aggregate([
        { $match: { $or : [{stockAvailable: true},{totalPages: 500}] } },
        { $sample: { size: 1 } }
    ])
    res.send({ msg: randomBook })
}

module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBookByYear = getBookByYear
module.exports.getParticularBook = getParticularBook


module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks