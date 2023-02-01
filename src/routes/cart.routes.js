const { Router } = require('express');
const { addProductToCart, getCart } = require('../controllers/cart.controller');
const userExtractor = require('../middlewares/userExtractor.middleware');

const router = Router();

router.get('/', userExtractor, getCart);
router.post('/', userExtractor, addProductToCart);

module.exports = router;
