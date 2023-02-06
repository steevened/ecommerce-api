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
