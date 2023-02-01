const { Router } = require('express');
const {
  addProductToCart,
  getCart,
  getProductsInCart,
} = require('../controllers/cart.controller');
const userExtractor = require('../middlewares/userExtractor.middleware');

const router = Router();

router.get('/', userExtractor, getCart);
router.get('/products', userExtractor, getProductsInCart);
router.post('/', userExtractor, addProductToCart);

module.exports = router;
