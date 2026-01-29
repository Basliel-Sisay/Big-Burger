const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, 
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      enum: ['food', 'drink', 'dessert'],
      required: true,
    },
    image: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model('product', productSchema);
module.exports = Product;