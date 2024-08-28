// models/Seller.js
const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  review: { type: String, required: true },
});

module.exports = mongoose.model('Seller', SellerSchema);
