
const UserModel = require("../models/bookModel")

const publishBook = async function (req, res) {

    let book = req.body

    let bookPublished = await UserModel.create(book)

    res.send({ msg: bookPublished })
}


const searchBook = async function (req, res) {

    let yourBook = await UserModel.find()
    res.send({ msg: yourBook })
}

module.exports.publishBook = publishBook
module.exports.searchBook = searchBook