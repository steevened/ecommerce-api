const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     getAllOrders:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: integer
 *             example: 1
 *           total_price:
 *             type: float
 *             example: 48.50
 *           user_id:
 *             type: integer
 *             example: 1
 *           status:
 *             type: string
 *             example: 'purchased'
 *           createdAt:
 *             type: string
 *             example: '2021-03-01T00:00:00.000Z'
 *           updatedAt:
 *             type: string
 *             example: '2021-03-01T00:00:00.000Z'
 *           productsInOrder:
 *             type: array
 *             items:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 order_id:
 *                   type: integer
 *                   example: 1
 *                 product_id:
 *                   type: integer
 *                   example: 1
 *                 quantity:
 *                   type: integer
 *                   example: 2
 *                 price:
 *                   type: float
 *                   example: 24.25
 *                 status:
 *                   type: string
 *                   example: 'purchased'
 *                 product:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     name:
 *                       type: string
 *                       example: 'shaves'
 *                     price:
 *                       type: float
 *                       example: 5.99
 *                     available_qty:
 *                       type: integer
 *                       example: 15
 *                     picture:
 *                       type: string
 *                       example: 'https://www.google.com/search?q=shaves'
 *                     status:
 *                       type: string
 *                       example: 'purchased'
 *                     user_id:
 *                       type: integer
 *                       example: 1
 */

const order = db.define('order', {
  id: {
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  total_price: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('not_purchased', 'purchased'),
    defaultValue: 'not_purchased',
  },
});

module.exports = order;
