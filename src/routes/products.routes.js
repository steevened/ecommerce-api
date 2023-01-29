const { Router } = require('express');
const { getAllProducts } = require('../controllers/products.controller');

const router = Router();

router.get('/', getAllProducts);

module.exports = router;
