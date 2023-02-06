const { Router } = require('express');
const { gerOrders, makeOrder } = require('../controllers/orders.controller');
const userExtractor = require('../middlewares/userExtractor.middleware');

const router = Router();

/**
 * @openapi
 * /api/v1/orders:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: get all orders
 *     tags:
 *       - [Orders]
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/getAllOrders'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getAllOrders'
 *       400:
 *         description: Bad Request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: something wrong
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: invalid or missing token
 */

router.get('/', userExtractor, gerOrders);
router.put('/', userExtractor, makeOrder);

module.exports = router;
