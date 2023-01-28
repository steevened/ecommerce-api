const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const cart = db.define('cart', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
    allowNull: false,
  },
});

module.exports = cart;
