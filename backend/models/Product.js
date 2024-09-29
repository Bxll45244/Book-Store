// models/Product.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedDate: { type: Date, required: true },
    price: { type: Number, required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

