const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0.01
  },
  image: {
    type: String,
    required: true,
    match: /\.jpg|jpeg|png$/i
  },
  likes: {
     type: Number,
     required: true,
     default: 0,
     min: 0
   }
  });


const Product = mongoose.model('Product', schema, 'products');

module.exports = Product;