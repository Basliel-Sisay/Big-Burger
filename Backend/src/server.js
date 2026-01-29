const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());
app.get('/api/health', (req, res) => {
  res.json({ message: 'Backend is alive' });
});
try {
  const path = require('path');
  const fs = require('fs');
  console.log('Current working directory:', process.cwd());
  console.log('__dirname:', __dirname);
  const routesPath = path.join(__dirname, 'routes', 'products.js');
  console.log('Looking for routes file at:', routesPath);
  console.log('Routes file exists:', fs.existsSync(routesPath));
  const controllerPath = path.join(__dirname, 'controllers', 'controller.js');
  console.log('Looking for controller file at:', controllerPath);
  console.log('Controller file exists:', fs.existsSync(controllerPath));
  app.use('/api/products', require('./routes/products.js'));
  console.log(' Products routes loaded successfully');
  app.use('/api/orders', require('./routes/orders.js'));
  console.log(' Orders routes loaded successfully');
} catch (error) {
  console.error(' Error loading routes:', error.message);
  process.exit(1);
}
if (!process.env.MONGO_URI) {
  console.error('ERROR: MONGO_URI is not defined in .env file');
  process.exit(1);
}
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);  
      console.log(`Health check: http://localhost:${PORT}/api/health`);
      console.log(`Products API: http://localhost:${PORT}/api/products`);
      console.log(`Orders API: http://localhost:${PORT}/api/orders`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:');
    console.error('Error message:', error.message);
    process.exit(1);
  });