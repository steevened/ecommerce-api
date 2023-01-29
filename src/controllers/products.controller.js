const ProductServices = require('../services/products.services');

const getAllProducts = async (req, res, next) => {
  try {
    const products = await ProductServices.getAllProducts();
    res.json(products);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = { getAllProducts };
