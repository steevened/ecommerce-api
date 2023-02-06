const { Router } = require('express');
const {
  getAllProducts,
  createProduct,
} = require('../controllers/products.controller');
const userExtractor = require('../middlewares/userExtractor.middleware');

const router = Router();

/**
 * @openapi
 * /api/v1/products:
 *   get:
 *     summary: get all products
 *     tags:
 *       - [Products]
 *     content:
 *       application/json:
 *         schema:
 *           $ref: '#/components/schemas/getAllProducts'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/getAllProducts'
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
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: create a product
 *     tags:
 *       - [Products]
 *     requestBody:
 *       description: Required fields to create a product
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/createProduct'
 *     responses:
 *       200:
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/productCreated'
 */

router.get('/', getAllProducts);
router.post('/', userExtractor, createProduct);

module.exports = router;
