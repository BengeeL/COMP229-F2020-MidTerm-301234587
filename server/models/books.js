// books.js - Benjamin Lefebvre - 301234587 - My Favorite Books
let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    author: String,
    genre: String
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);
