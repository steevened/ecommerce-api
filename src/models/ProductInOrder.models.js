const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const productInOrder = db.define('productsInOrder', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  productId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
});

module.exports = productInOrder;
