const PubModel = require("../models/publisherModel")

const createPub = async function (req, res) {
    let pub = req.body
    let pubDataSave = await PubModel.create(pub)
    res.send({ data: pubDataSave })
}

const getPubData = async function (req, res) {
    let pubData = await PubModel.find()
    res.send({ data: pubData })
}

module.exports.createPub = createPub
module.exports.getPubData = getPubData