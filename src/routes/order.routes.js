const { Router } = require('express');
const { gerOrders, makeOrder } = require('../controllers/orders.controller');
const userExtractor = require('../middlewares/userExtractor.middleware');

const router = Router();

router.get('/', userExtractor, gerOrders);
router.put('/', userExtractor, makeOrder);

module.exports = router;
