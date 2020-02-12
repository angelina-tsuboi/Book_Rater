var mongoose = require('mongoose')

let Book = mongoose.model('Book', {
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})

module.exports = {
    Book: Book
}