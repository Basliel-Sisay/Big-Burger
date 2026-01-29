const Order = require('../models/order.js');
const createOrder = async (req, res) => {
  try {
    const orderData = req.body;  
    const newOrder = new Order(orderData);
    const savedOrder = await newOrder.save();
    console.log('New order saved:', savedOrder._id);  
    res.status(201).json({ message: 'Order placed successfully!', orderId: savedOrder._id });
  } catch (error) {
    console.error('Error saving order:', error);
    res.status(500).json({ message: 'Error placing order' });
  }
};
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().sort({createdAt: -1}); 
    res.json(orders);
  } catch (error) {
    res.status(500).json({message:'Error fetching orders'});
  }
};
module.exports = {
  createOrder,
  getAllOrders,
};