const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
  customerName: { type: String, required: true },
  phone: { type: String, required: true },
  email: String,
  address: { type: String, required: true },
  notes: String,
  items: [
    {
      name: { type: String, required: true },
      cost: { type: Number, required: true },  
      amount: { type: Number, required: true },
    }
  ],
  total: { type: Number, required: true },
  status: { type: String, default: 'pending' },
}, { timestamps: true });
const Order = mongoose.model('Order', orderSchema);  
module.exports = Order;