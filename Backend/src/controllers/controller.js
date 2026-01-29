const Product = require("../models/product.js");
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    console.log('Fetched products:', products.length);  
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ message: 'Error fetching products' });
  }
};
const addProduct = async (req, res) => {
  try {
    const productData = req.body;
    const newProduct = new Product(productData);
    const savedProduct = await newProduct.save();
    console.log('Added new product:', savedProduct.name);  
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Error adding product' });
  }
};
module.exports = {
  getAllProducts,
  addProduct,
};