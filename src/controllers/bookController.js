
const BookModel = require("../models/bookModel")

const createAuthor = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.authorSchema.create(data)
    res.send({ msg: savedData })
}
const createBook = async function (req, res) {
    let data = req.body
    let savedData = await BookModel.bookSchema.create(data)
    res.send({ msg: savedData })
}

//----------1

const bookNauthorData = async function (req, res) {
    let allUsers = await BookModel.authorSchema.findOne({ author_name: { $eq: "Chetan Bhagat", } })
    let id = allUsers.author_id
    let allBooks = await BookModel.bookSchema.find({ author_id: { $eq: id } }).select({ name: 1, _id: 0 })
    res.send({ msg: allBooks })
}

//---------2

const updateData = async function (req, res) {
    let allUsers = await BookModel.bookSchema.findOne({ name: { $eq: "Two states" } })
    let id = allUsers.author_id
    // let authorData = await BookModel.authorSchema.find({ author_id: { $eq: id } })
    let authorName = await BookModel.authorSchema.find({ author_id: { $eq: id } }).select({ author_name: 1, _id: 0 })
    let price = await BookModel.bookSchema.findOneAndUpdate({ name: { $eq: "Two states" } }, { $set: { price: 999 } }, { new: true }).select({ price: 1, _id: 0 })

    res.send({ msg: authorName, price })
}

//------------3

const priceData = async function (req, res) {
    let allUsers = await BookModel.bookSchema.find({ price: { $gte: 50, $lte: 100 } })
    let bookName = await BookModel.bookSchema.find({ price: { $gte: 50, $lte: 100 } }).select({ name: 1, _id: 0 })
    const allId = allUsers.map(x => x.author_id)
    let authorName = await BookModel.authorSchema.find({ author_id: { $in: allId } }).select({ author_name: 1, _id: 0 })

    res.send({ msg: bookName, authorName })
}

module.exports.createAuthor = createAuthor
module.exports.createBook = createBook
module.exports.bookNauthorData = bookNauthorData
module.exports.updateData = updateData
module.exports.priceData = priceData