const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    email: String,
    course: String,
    rollNo: Number
});

const ProductModel = mongoose.model('products', ProductSchema);

module.exports = ProductModel;