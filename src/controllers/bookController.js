const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")

const createBook = async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({ data: bookCreated })
}

const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}

const getBooksNauthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('authorId').populate('publisher')

    res.send({ data: specificBook })
}

const falseCoverUpdate = async function (req, res) {

    let updatedCover = await bookModel.updateMany({ isHardCover: false })
    res.send({ updatedCover })
}

const trueCoverUpdate = async function (req, res) {

    let findPubId = await publisherModel.find({ name: { $in: ["Penguin", "HarperCollins"] } }).select({ _id: 1 })

    let pubId = []
    for (let i = 0; i < findPubId.length; i++) {
        pubId.push(findPubId[i]._id)
    }
    let updatedCover = await bookModel.updateMany({ publisher: { $in: pubId } }, { $set: { isHardCover: true } })
    res.send({ updatedCover })
}

const priceUpdate = async function (req, res) {

    let findPubId = await publisherModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })

    let pubId = []
    for (let i = 0; i < findPubId.length; i++) {
        pubId.push(findPubId[i]._id)
    }
    let updatedPrice = await bookModel.updateMany({ publisher: { $in: pubId } }, { $inc: { price: 10 } })
    res.send({ updatedPrice })
}



module.exports.createBook = createBook
module.exports.getBooksData = getBooksData

module.exports.getBooksNauthorDetails = getBooksNauthorDetails

module.exports.falseCoverUpdate = falseCoverUpdate
module.exports.trueCoverUpdate = trueCoverUpdate

module.exports.priceUpdate = priceUpdate