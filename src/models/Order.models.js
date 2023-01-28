const db = require('../utils/database');
const { DataTypes } = require('sequelize');

const order = db.define('order', {
  id: {
    primaryKey: true,
    type: DataTypes.INTEGER,
  },
  totalPrice: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
});

module.exports = order;
