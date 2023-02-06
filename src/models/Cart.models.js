const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     getCart:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         user_id:
 *           type: integer
 *           example: 1
 *         total_price:
 *           type: float
 *           example: 0
 *     getProductsInCart:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         user_id:
 *           type: integer
 *           example: 1
 *         total_price:
 *           type: float
 *           example: 1000
 *         productsInCart:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               cart_id:
 *                 type: integer
 *                 example: 1
 *               product_id:
 *                 type: integer
 *                 example: 1
 *               quantity:
 *                 type: integer
 *                 example: 10
 *               price:
 *                 type: float
 *                 example: 100
 *               status:
 *                 type: string
 *                 example: 'not_purchased'
 *               product:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   name:
 *                     type: string
 *                     example: 'shaves'
 *                   price:
 *                     type: float
 *                     example: 10
 *                   available_qty:
 *                     type: integer
 *                     example: 15
 *                   picture:
 *                     type: string
 *                     example: 'https://www.google.com/search?q=shaves'
 *                   status:
 *                     type: string
 *                     example: 'not_purchased'
 *                   user_id:
 *                     type: integer
 *                     example: 1
 *     addProductToCart:
 *       type: object
 *       properties:
 *         product_id:
 *           type: integer
 *           example: 1
 *         quantity:
 *           type: integer
 *           example: 10
 *     productAddedToCart:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         cart_id:
 *           type: integer
 *           example: 1
 *         product_id:
 *           type: integer
 *           example: 1
 *         quantity:
 *           type: integer
 *           example: 5
 *         price:
 *           type: float
 *           example: 100
 *
 */

const cart = db.define(
  'cart',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    total_price: {
      type: DataTypes.FLOAT,
      defaultValue: 0,
      allowNull: true,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = cart;
