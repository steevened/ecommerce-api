const CartServices = require('../services/cart.services');

const getCart = async (req, res, next) => {
  try {
    const user = req.user;
    const result = await CartServices.getCart(user);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const addProductToCart = async (req, res, next) => {
  try {
    const user = req.user;
    const { product_id, quantity } = req.body;
    const fields = { product_id, quantity };
    const result = await CartServices.addProductToCart(fields, user);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getProductsInCart = async (req, res, next) => {
  try {
    const user = req.user;
    const result = await CartServices.getProductsInCart(user);
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = { addProductToCart, getCart, getProductsInCart };
