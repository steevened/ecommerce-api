const db = require('../utils/database');
const { DataTypes } = require('sequelize');

/**
 * @openapi
 * components:
 *   schemas:
 *     getAllProducts:
 *       type: array
 *       items:
 *         type: object
 *         properties:
 *           id:
 *             type: integer
 *             example: 1
 *           name:
 *             type: string
 *             example: 'shaves'
 *           price:
 *             type: float
 *             example: 5.99
 *           available_qty:
 *             type: integer
 *             example: 15
 *           picture:
 *             type: string
 *             example: 'https://www.google.com/search?q=shaves'
 *           status:
 *             type: string
 *             example: 'not_purchased'
 *           user:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               username:
 *                 type: string
 *                 example: 'John'
 *     createProduct:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: 'gloves'
 *         price:
 *           type: float
 *           example: 7.99
 *         available_qty:
 *           type: integer
 *           example: 20
 *         picture:
 *           type: string
 *           example: 'https://www.google.com/search?q=gloves'
 *     productCreated:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: 'gloves'
 *         price:
 *           type: float
 *           example: 7.99
 *         available_qty:
 *           type: integer
 *           example: 20
 *         picture:
 *           type: string
 *           example: 'https://www.google.com/search?q=gloves'
 *         status:
 *           type: string
 *           example: 'not_purchased'
 *         user_id:
 *           type: integer
 *           example: 1
 *
 */

const product = db.define(
  'product',
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    available_qty: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('not_purchased', 'purchased'),
      defaultValue: 'not_purchased',
    },
    user_id: {
      type: DataTypes.INTEGER,
      // allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = product;
