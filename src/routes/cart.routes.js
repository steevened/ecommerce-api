const { Router } = require('express');
const {
  addProductToCart,
  getCart,
  getProductsInCart,
} = require('../controllers/cart.controller');
const userExtractor = require('../middlewares/userExtractor.middleware');

const router = Router();

/**
 *
 * @openapi
 * /api/v1/cart/:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: get user cart
 *     tags:
 *       - [Cart]
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/getCart'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 user_id:
 *                   type: integer
 *                   example: 1
 *                 total_price:
 *                   type: integer
 *                   example: 0
 *       401:
 *         description: Unauthorized
 *         content:
 *           application/json:
 *             schema:
 *              type: object
 *              properties:
 *                message:
 *                  type: string
 *                  example: token invalid
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: add product to cart
 *     tags:
 *       - [Cart]
 *     requestBody:
 *       description: Required fields to add a product to cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/addProductToCart'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/productAddedToCart'
 * /api/v1/cart/products:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: get products in cart
 *     tags:
 *       - [Cart]
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/getProductsInCart'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getProductsInCart'
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
 *
 */

router.get('/', userExtractor, getCart);
router.post('/', userExtractor, addProductToCart);
router.get('/products', userExtractor, getProductsInCart);

module.exports = router;
