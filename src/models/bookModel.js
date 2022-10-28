
const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({

    author_id: {
        type: Number,
        required: true
    },
    author_name: String,
    age: Number,
    address: String

}, { timestamps: true });

const bookSchema = new mongoose.Schema({

    name: String,
    author_id: Number,
    price: Number,
    ratings: Number,

}, { timestamps: true });


module.exports.authorSchema = mongoose.model('Authors', authorSchema)
module.exports.bookSchema = mongoose.model('Books', bookSchema) 
